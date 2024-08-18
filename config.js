//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://sten_4ldx_user:9o1M5XMhT9FutGJ7gN1S90S39i9C0pQQ@dpg-cqr69ng8fa8c73foguig-a.oregon-postgres.render.com/sten_4ldx";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Darkside-Md/Inconnu-V2-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029ValSilu9Bb62q8tgBr3p";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029ValSilu9Bb62q8tgBr3p";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.devs = "50936698203";
global.sudo = process.env.SUDO || "50936698203";
global.owner = process.env.OWNER_NUMBER || "36698203";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib09LeC9zclNwdVQyOWlCOHloTDJhSnNydThWSTNURGJBa2h3dVdBdC9raz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRC80NWs3bEtSR3phMVhVUkZUSFRsWk5vZVZubGtMUDFhSUFUWmpjKzhWND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTlNWREtORDJubW5HazdkSjBhYjlYYTFRdVFBSmRtOFlYckVmaCswYjJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYcmtiWDFTTGk3OWtlWnFMdFU0RHQ5L2hpN3lnZjNGVm1BL05ZMUJwb3ljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JbCtxR05rS2NqMEFtazRPeXdNM0kzU1pzK1dLVCt6VFIvcUZZS0s0RTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIzT3Y3ek1IcWhnZVFNWnRWbmFYeW1YV05ld3VEdzhtOWE5Z0hDaHVQRG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0UxNlRpV3l4bng2aXZkZi9qRjZoU25hVWRqTG41bzAvSGh1OUJSWHVuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME05RGE4VW1INlg2UDhTaU1XcTIvaUNOVjlwVWVoZWxoem9VK3BwOUl5WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InF2ME5vVkNlaGRIT0w3ZFlLU3VtSUtNalViS3cwYm56TW55RllhTjEzbmRyRVJaVHFSZXNhblBLTzIwUnNXQ20zQlBMV2VpZ21ZemdxYmZKMGZHRmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiIvS2MzTWtSL1VsdDVQWGhReTdBL0p6K3RZNXFIWEpFSE5LSW5XZFVoaUpzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTM1NjYyNTkzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdBOTdGRTVBRDRDOTlEOTkzMjQ5NEFEOTk3ODJEMTY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM5NDY2NTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImoyaDU2SkdkUU02SllYNzAtcW9uNlEiLCJwaG9uZUlkIjoiYzE5MjFkNzMtNTZjZS00MjI0LTkxZDctNGE5ZmIxNjVjNDQwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklwdndTTWFSZU56eDYwMDgxV1Q2bXZwTjU5UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFdzdYRjBKLzNVOHE5NnNzeExkdWJaRzJCQjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1NHVFJKS0UiLCJtZSI6eyJpZCI6IjUwOTM1NjYyNTkzOjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0szdG1MVUJFSlN0aGJZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNrMWc0cjNNZGoyOUpjVFJVUTk3ZTFDcitTcyt3ZXdFT3UvVTVEdS9tUlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IklsZ1VWZ2k3Y01PRDdFZEsvMExoVVhIMmJtRDFtZjcrMmt2VFBWQUIveEZ0bEVsRzdLb25IdFN6eFZ5WHBPNEIxMUkxMU4wcnBQV0xrQjhvUWp1T0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJScVg3dityNHdEdFNMeXlUQzMwak9zQys5cmIvZ2Y2bU5tV0ppVjBsTm12QjR3L0drUFlUR3RDeGtYUHBvMGJ6SWZCNU45UmVHZHVxeWd3R2NKaHBpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTM1NjYyNTkzOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDVOWU9LOXpIWTl2U1hFMFZFUGUzdFFxL2tyUHNIc0JEcnYxT1E3djVrViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzk0NjY1NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJamMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in DRK_ST_Tech| enjoy your time| this is DRK_ST_V1",
  author: process.env.PACK_AUTHER || "INCONNU TECH 💆‍♂️",
  packname: process.env.PACK_NAME || "🤫",
  botname: process.env.BOT_NAME || "INCONNU-V2-MD",
  ownername: process.env.OWNER_NAME || "INCONNU TECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || ""
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
