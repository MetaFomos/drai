import React, { useEffect, useState } from "react";
import { openAIKey } from "../utils";

const ChatBot = () => {
  const [speechRecognition, setSpeechRecognition] = useState();
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isAiTalking, setIsAiTalking] = useState(false);
  const [recognition, setRecognition] = useState();
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [utterance, setUtterance] = useState();

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

  const speakLang = (texts) => {
    setIsAiTalking(true);
    const la = `${
      localStorage.getItem("dragonai-language")
        ? localStorage.getItem("dragonai-language").split('"')[1]
        : "en"
    }`;
    if (
      window.speechSynthesis &&
      typeof SpeechSynthesisUtterance !== undefined
    ) {
      const synth = window.speechSynthesis;
      // get all the voices available on your browser
      const voices = synth.getVoices();
      // find a voice that can speak chinese
      const voice = voices.filter((voice) => voice.lang.indexOf(la) === 0)[0];
      // make the browser speak!
      const utterThis = new SpeechSynthesisUtterance(texts);
      utterThis.voice = voice;
      synth.speak(utterThis);
    }
    // const utter = new window.SpeechSynthesisUtterance();
    // utter.text = texts;
    // utter.lang = la;
    // utter.voice = findCorrectVoice(la);
    // utter.volume = 5;
    // utter.onend = () => {
    //   handleMute();
    // };
    // utter.onerror = () => {
    //   handleMute();
    // };
    // utter.onpause = function () {
    //   // workaround for mobile issue
    //   if (window.speechSynthesis.paused) {
    //     handleMute();
    //   }
    // };
    // setUtterance(utter);

    // // Speak the text using the SpeechSynthesisUtterance API
    // window.speechSynthesis.speak(utter);
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

  const findCorrectVoice = (lang) => {
    const { speechSynthesis } = window;
    if (lang === "en") {
      const voices = speechSynthesis
        .getVoices()
        .filter(
          (voice) => voice.name === "Ting-Ting" && voice.lang === "zh-CN"
        );
      if (voices.length > 0) {
        return voices[0];
      }
    } else if (lang === "en") {
      const voices = speechSynthesis
        .getVoices()
        .filter((voice) => voice.name === "Alex" && voice.lang === "en-US");
      if (voices.length > 0) {
        return voices[0];
      }
    }

    return window.speechSynthesis.getVoices()[44];
  };

  const handleMute = () => {
    setIsAiTalking(false);
    window.speechSynthesis.cancel();
    setUtterance(undefined);
  };

  const testLanguages = (text = "") => {
    const language = localStorage
      .getItem("dragonai-language")
      .toLowerCase()
      .split('"')[1];

    let word = "私は 6 年以上の経験を持つフルスタック開発者です。";
    switch (language) {
      case "zh":
        word = "我是一名拥有超过 6 年经验的全栈开发人员。";
        break;
      case "ja":
        word = "私は 6 年以上の経験を持つフルスタック開発者です。";
        break;
      default:
        word = "I am a full-stack developer with over 6 years of experience.";
        break;
    }

    // Feature detect
    if (
      window.speechSynthesis &&
      typeof SpeechSynthesisUtterance !== undefined
    ) {
      const synth = window.speechSynthesis;
      // get all the voices available on your browser
      const voices = synth.getVoices();
      // find a voice that can speak chinese
      const voice = voices.filter(
        (voice) => voice.lang.indexOf(language) === 0
      )[0];
      // make the browser speak!
      const utterThis = new SpeechSynthesisUtterance(word);
      utterThis.voice = voice;
      synth.speak(utterThis);
    }
  };

  return (
    <div
      className="fixed w-[100px] right-[10px] bottom-[10px] cursor-pointer dragon-bot"
      onClick={testLanguages}
    >
      <img src="/bot/dragon.gif" />
    </div>
  );
};

export default ChatBot;
