const voiceSettingEn = {
  languageCode: "en-US",
  ssmlGender: "FEMALE",
  name: "en-US-Standard-F",
};

const voiceSettingCn = {
  languageCode: "cmn-CN",
  ssmlGender: "FEMALE",
  name: "cmn-CN-Wavenet-D",
};

const voiceSettingJp = {
  languageCode: "ja-JP",
  ssmlGender: "FEMALE",
  name: "ja-JP-Neural2-B",
};

const voiceSettingK = {
  languageCode: "ko-KR",
  ssmlGender: "FEMALE",
  name: "ko-KR-Standard-A",
};

const getVoiceSetting = (language) => {
  switch (language) {
    case "EN":
      return voiceSettingEn;
    case "ZH":
      return voiceSettingCn;
    case "JA":
      return voiceSettingJp;
  }
  return voiceSettingK;
};

module.exports = getVoiceSetting;
