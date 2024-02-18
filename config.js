const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94766632281"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94766632281' 
global.devs = '94766632281';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dxc0ZjeTRFdVo2aUV6RW1MVkcvdCtJZXFDZXJubk10UVMvNnkvcG1IYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkR6VzFIUjJNWE5Qc1lva0NZVi9GZVAwb1ByMHk1VlBueU9lS21LRjhYND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRGk3Rk44QTdEYkhDQ1k3YzYweWFDaGp5VDBKLzlJSGkwN1dpZ2ZpS21JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaaGFDb0JmSHJxakxxemR3U0s5OGxwcXpJeUo1MERmN1UwOUtmeTh5a1JrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1GTTg4UnFYOG1BdnkydkUweUtTdkhUNzFYaUJVd3phRmhLRkZQQTd5MnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV2eGwxYThvME8yR0tWZnBLWDdGZTE2dStBVml0WnZEVDJrT0MrbEVBeHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtNZWdldkgzMXNRdklRYnZ0ai8zc2ZhNXl2TzlvZUw2ZEhQY3FTb3NXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFjTmV5WG5qVnNUakNDcE9TblUvTG9RWDkxcUNOSytrWVFVQmd3YnJUZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KYmFpOGRReVlmZi9BL3cvMjNpVGRNaU5Yd2xSOTMvUnUwU00vemdCajZCQ2xNdTFlY0czM0Q4VVNUSmFqUktsSDR0N3NsZlNCUG82WFZEbXdFdER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJlMFE5TUtMb1Zidy9YTkFFcUdmR2t2Ym9DVzlrRXM3dHV0a2JVMVphS3RFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWc0ZnZHFHdFFpaWg5NHBGeFFnNXZ3IiwicGhvbmVJZCI6IjUxY2IzZWQ0LWU2OWQtNDc1My1iYzg2LWE2MDQ4NDk1Y2QxNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRR0NDK2VMYmtkWldaSVF6SklKeGROb1g3WXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidG9ad21FYmRKWDN5MmlLOVd0OWNaWVRXK2w0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVYWE5YWUxEIiwibWUiOnsiaWQiOiI5NDc2NjYzMjI4MToxMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtIfhtKLKgCAtIOG0jc2lIMqAICDJqiDqnLHNoyDhtJzNqyDKgCDhtJwgIHgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B1cXBzOERFS0RqeGE0R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJKMW5TU0t3UC9aU1VXZldBU1FsclcyNXVGbFVKQkdTMGJ4OEVQNmJtdzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdjS0tldk1UbHpRT2wwRUxxNS9VUFc1SGQwS0ZsVkt6enZhTW5neEZPYlFOMnlMUC9yTG9nVDFiek8rcVN2Qjk5VHdBc3R5TFhxZ1VCcEhuZit0WENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5N3BhRngwdTJEK2VKK2dVM1hFRFBMdFd6RkF2czduMXRBMURTZWhNcjFSSzRMRjJnQ3lHTDRzVnpuSGdpc0JFQytmVWhnUVJXeUM4RmRuZEJQYWhCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY2NjMyMjgxOjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVTZFowa2lzRC8yVWxGbjFnRWtKYTF0dWJoWlZDUVJrdEc4ZkJEK201c04ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDgyMjQ5MzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGtCIn0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'isuru',
  packname:  process.env.PACK_NAME || 'isuru',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ᴍ ʀ ⃞ ɪ ꜱ ᴜ ʀ ᴜ' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
