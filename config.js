

module.exports = {
  TOKEN: "",
  ownerID: ["198852782604812289", ""], 
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  musicardTheme:"themes16", //Goes from themes1 to themes19
  activityName: "米其林音乐机器人 免费使用~", // This is bot status Write Anything here 
  activityType: "WATCHING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "",
  CheckmarkIcon: "https://cdn.discordapp.com/emojis/819446784647757834.gif",
  MusicIcon:"https://cdn.discordapp.com/emojis/763415718271385610.gif",
  embedTimeout: 5,  // Timeout before the button interaction embeds are deleted ( Default - 5 seconds)
  errorLog: "", 

   // Lavalink Server Details

  nodes: [
    {
        name: "Server",
        host: "nodev4.fypmoon.org",
        port: 1118,
        password: "fypmoon.org",
        reconnectTimeout: 5000,
        reconnectTries: Infinity,
        secure: false
    },
 ]
}

