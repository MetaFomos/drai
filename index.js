// server/index.js
const path = require("path");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const getVoiceSetting = require("./voicesetting");

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

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
app.use(express.static(path.resolve(__dirname, "./public")));

// Handle GET requests to /api route
app.post("/api/tts", async (req, res) => {
  const { text, language } = req.body;
  const path = await synthesize(text, language);
  res.json({ path: path });
});

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

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
