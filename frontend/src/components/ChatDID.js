import React, { useEffect, useRef, useState } from "react";
import { openAIKey } from "../utils";
import useSpeechSynthesis from "../hooks/speechsynth";
import axios from "axios";

const serverURL = "http://localhost";

const ChatDID = () => {
  const [speechRecognition, setSpeechRecognition] = useState();
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isAiTalking, setIsAiTalking] = useState(false);
  const [recognition, setRecognition] = useState();
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [utterance, setUtterance] = useState();
  const [voices, speak] = useSpeechSynthesis();

  useEffect(() => {
    try {
      requestMicrophonePermission();
      setSpeechRecognition(
        new (window.SpeechRecognition ||
          window.webkitSpeechRecognition ||
          window.mozSpeechRecognition ||
          window.msSpeechRecognition)()
      );
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    if (message == null || message.length === 0) return;

    thinking();
  }, [message]);

  useEffect(() => {
    if (response == null || response.length === 0) return;

    speakLang(response);
  }, [response]);

  async function requestMicrophonePermission() {
    if (!window.navigator) return false;

    const permission = await navigator.permissions.query({
      name: "microphone",
    });

    if (permission.state === "granted") {
      return true;
    }
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        window.localStream = stream;
        window.localAudio.srcObject = stream;
        window.localAudio.autoplay = true;
      })
      .catch((err) => {
        console.error(`getUserMedia got an error: ${err}`);
      });
    return new Promise((resolve) => {
      // Set the event handler for the change event
      permission.onchange = () => {
        // Resolve the promise with the current state of the permission
        resolve(permission.state === "granted");
      };
    });
  }

  const toggleListening = () => {
    // clear previous output
    setMessage("");

    if (isListening) {
      // stop listening
      recognition?.stop();
    } else {
      // start listening
      const reco = createSpeechRecognition();
      setRecognition(reco);
      reco.start();
    }
  };

  const createSpeechRecognition = () => {
    // Use Web Speech API to recognize speech
    const rec = speechRecognition;
    rec.lang = `${
      localStorage.getItem("dragonai-language")
        ? localStorage.getItem("dragonai-language").split('"')[1]
        : "en"
    }`;
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onstart = function () {
      setIsListening(true);
      console.log("start recognizing!!");
    };
    rec.onend = function () {
      setIsListening(false);
      console.log("recognizing end!!");
    };
    rec.onerror = function (event) {
      setIsListening(false);
      console.log("recognizing error!!", event.message);
    };
    rec.onresult = (event) => {
      const { transcript } = event.results[0][0];
      setMessage(transcript);
    };
    return rec;
  };

  const thinking = async () => {
    setIsThinking(true);
    setResponse("");
    const text = await callGPT(message, 0.5);
    setResponse(text);
    setIsThinking(false);
  };

  const speakLang = async (texts) => {
    setIsAiTalking(true);
    const language = `${
      localStorage.getItem("dragonai-language")
        ? localStorage.getItem("dragonai-language").split('"')[1]
        : "en"
    }`;

    const requestBody = {
      text: texts,
      language,
    };
    createTalk(texts);
    setIsAiTalking(false);
  };

  const callGPT = async (mes, temperature) => {
    const key = openAIKey;
    if (key == null) return alert("you need to set api key first!");
    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: mes }],
      temperature,
    };
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
    });
    const responseBody = await response.json();
    const replyMessage = responseBody.choices[0].message.content;
    return replyMessage;
  };

  const handleMute = () => {
    setIsAiTalking(false);
    window.speechSynthesis.cancel();
    setUtterance(undefined);
  };

  const [file, setFile] = useState(null);
  const [imgPath, setImgPath] = useState("did.jpg");
  const [videoPath, setVideoPath] = useState(null);
  const [videoShow, setVideoShow] = useState(false);
  const videoRef = useRef();
  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      setVideoShow(false);
      const uploadFile = async () => {
        const formData = new FormData();
        formData.append("file", file);
        console.log(file.name);
        try {
          const res = await axios.post(
            `${serverURL}/api/uploadPicture`,
            formData
          );
          setImgPath(res.data["path"]);
        } catch (ex) {
          console.log(ex);
        }
      };

      uploadFile();
    }
  }, [file]);

  useEffect(() => {
    if (videoPath) {
      setVideoShow(true);
      // alert(videoPath);
      console.log(videoRef.current);
      videoRef.current && videoRef.current.play();
    }
  }, [videoPath]);

  const createTalk = async (text) => {
    const createRes = await axios.post(`${serverURL}/api/generate_did_video`, {
      fileName: imgPath,
      text: text,
    });
    const resultInterval = setInterval(async () => {
      const res = await axios.post(`${serverURL}/api/get_talk`, {
        t_id: createRes.data.data.id, // "tlk_Bk-uAi0xUvf1Zd-Z5tLL0"//
      });
      if (res.data.data.result_url) {
        setVideoPath(res.data.data.result_url);
        clearInterval(resultInterval);
      }
    }, 500);
  };

  return (
    <div className="fixed left-[10px] bottom-[10px] cursor-pointer w-[100px]">
      <label htmlFor="fileInput">
        {!videoShow && <img src={`${serverURL}/faces/${imgPath}`} alt="DID" />}
        {videoShow && (
          <video width={100} ref={videoRef} autoPlay>
            <source src={videoPath} type="video/mp4" />
          </video>
        )}
        <input
          type="file"
          id="fileInput"
          hidden
          onChange={handleChange}
          accept="image/png, image/jpg, image/jpeg"
        />
      </label>
      <button
        className="bg-golden text-[16px] sm:text-[16px] px-[10px] py-[8px] rounded-lg dark-font mt-[10px]"
        onClick={toggleListening}
      >
        {isListening
          ? "Listening"
          : isThinking
          ? "Thinking"
          : isAiTalking
          ? "Talking"
          : "Click"}
      </button>
    </div>
  );
};

export default ChatDID;
