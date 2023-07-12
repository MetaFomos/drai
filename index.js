// server/index.js
require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const getVoiceSetting = require("./voicesetting");
const fileUpload = require("express-fileupload");
const axios = require("axios");

const TextToSpeech = require("@google-cloud/text-to-speech");

// Import other required libraries
const fs = require("fs");
const util = require("util");
// Creates a client
const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(fileUpload());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
app.use(express.static(path.resolve(__dirname, "./public")));

const didHeaders = {
  Authorization: `Basic ${process.env.DIDKEY}`,
  "Content-Type": "application/json",
};

// Handle GET requests to /api route
app.post("/api/tts", async (req, res) => {
  const { text, language } = req.body;
  const path = await synthesize(text, language);
  res.json({ path: path });
});

// Photo upload
app.post("/api/uploadPicture", async (req, res) => {
  const newpath = __dirname + "/public/faces/";
  const file = req.files.file;

  const fileExtensions = file.name.split(".");
  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  const fileName = `${timestamp}.${fileExtensions[fileExtensions.length - 1]}`;

  console.log(fileName);
  file.mv(`${newpath}${fileName}`, (err) => {
    if (err) res.json({ path: "No" });
    else
      res.json({
        path: fileName,
      });
  });
});

// Generate DID Video
app.post("/api/generate_did_video", async (req, res) => {
  const { fileName, text } = req.body;
  const result = await createTalk(text, fileName);
  res.json(result);
});

app.post("/api/get_talk", async (req, res) => {
  const {t_id} = req.body;
  console.log(t_id);
  const response = await getTalk(t_id);
  console.log(response);
  res.json(response)
})

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});

const synthesize = async (text, lang) => {
  const client = new TextToSpeech.TextToSpeechClient();

  const request = {
    input: { text: text },
    voice: getVoiceSetting(lang),
    audioConfig: { audioEncoding: "MP3" },
  };

  const [response] = await client.synthesizeSpeech(request);

  const location = "public/texttospeech/";
  const mp3FileName = Date.now() + "-" + randomInteger(100, 3000) + ".mp3";

  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile(location + mp3FileName, response.audioContent, "binary");

  return "texttospeech/" + mp3FileName;
};

const createTalk = async (input_txt, fileName) => {
  try {
    const data = {
      script: {
        type: "text",
        provider: { type: "microsoft", voice_id: "Jenny" },
        ssml: "false",
        input: input_txt,
      },
      config: { fluent: "false", pad_audio: "0.0" },
      source_url: `https://dragonai.io/faces/${fileName}`,
    };
    const talkResponse = await axios.post(`https://api.d-id.com/talks`, data, {
      headers: didHeaders
    })
    return { success: true, data: talkResponse.data };
  } catch (error) {
    console.log(error.message);
    return { success: false };
  }
};

const getTalk = async (t_id) => {
  try {
    const response = await axios.get(`https://api.d-id.com/talks/${t_id}`, {
      headers: didHeaders
    })
    return {success: true, data: response.data}
  } catch (error) {
    console.log(error.message);
    return { success: false };
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
