const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Abuja/Lagos ";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2347083737485" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347083737485,2348139663261";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2347083737485,2348139663261";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347083737485,2348139663261";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_04_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxLFxuICAgICAgICA0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYxLFxuICAgICAgICA1LFxuICAgICAgICA4MSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODksXG4gICAgICAgIDU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTksXG4gICAgICAgIDc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMlVYNEJsUk9tVGxpekFJS2FlZTA1Wlh5ODF5L09QUmluZHcvSFFQVnFYaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY3NJYlJJMmFRWW1RYXpQOXVRYl9Od1wiLFxuICBcInBob25lSWRcIjogXCJhMWIwNTdkNS1iMGYwLTQ3ODctOWY2OC01YTZiMDM4MGMwNmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICA3NSxcbiAgICAgIDc0LFxuICAgICAgNTMsXG4gICAgICAyOSxcbiAgICAgIDEzNixcbiAgICAgIDE1MyxcbiAgICAgIDE3LFxuICAgICAgMTU4LFxuICAgICAgMjA3LFxuICAgICAgMjA5LFxuICAgICAgMjQsXG4gICAgICA1MSxcbiAgICAgIDEyOSxcbiAgICAgIDg2LFxuICAgICAgMTc3LFxuICAgICAgMTU1LFxuICAgICAgMTM4LFxuICAgICAgMTQzLFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDE0MCxcbiAgICAgIDI0MixcbiAgICAgIDE2NSxcbiAgICAgIDE3NCxcbiAgICAgIDI1NCxcbiAgICAgIDEyNCxcbiAgICAgIDY4LFxuICAgICAgMTY3LFxuICAgICAgOTgsXG4gICAgICAxNDksXG4gICAgICAxNzcsXG4gICAgICA5NSxcbiAgICAgIDg3LFxuICAgICAgMTAsXG4gICAgICAyMTksXG4gICAgICAxNDUsXG4gICAgICA0MSxcbiAgICAgIDIzMixcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJISkFNWVdLUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4MzczNzQ4NToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIn5CSlwiLFxuICAgIFwibGlkXCI6IFwiNDYyNTk0ODIxMzMxNzoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLeUY5Y1FDRUtXT3BiVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldVU1BFYmVwN0VPZTlpMnRvS0dQNWtFWHQ2cStxeW5BMi8weENuanBwMTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVkdiU3liVGVQQ3QvNHZYM3AwYUYzUmY2ZGNFTUtMTGhlWFNHTXR5bkF1TWxHRWs0U2RJbE1qckRqeDZPL2tpQ3VxWGpyMFRkRjZtR2xQSXFrRWdNQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOFh2UEV4aGtLbi9UQWNIZTg4bHByOW9TVzA2K2Z1UTdoTE9ZbkRFOENsZVFFWmFJRHpoOWM0RGhkaWQ2a1dLSlZJOEhKazlRS2VhN1dWMysxU21qZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4MzczNzQ4NToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzNjk4MzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#", 
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©BJ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BJ-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "BIT-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x BJ
    
    ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
