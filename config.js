const ez = require("node-fetch");
global.owner = ['6288804947282', '6289697488609', '0'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  clph: 'https://recoders-area.caliph.repl.co',
  caliph: 'https://api.caliph.my.id',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  vh: 'http://api.vhtear.com'
  
}
global.APIKeys = { // APIKey Here
   'https://api.caliph.my.id': 'caliphganz',
   'http://api.vhtear.com': 'rikkachan',
   'https://api.lolhuman.xyz': 'rikkabotz',
  'https://api.xteam.xyz': 'ameysbot'
}
function getBuffer(buffer) {
return ez(buffer).then(a => a.buffer())
}
const choice = (array) => {
return array[Math.floor(Math.random() * array.length)]
}
// Sticker WM
global.packname = (`Gawr Gura Bot`)
global.getBuffer = getBuffer
global.author = (`×͜×  亗ᴮᵒᵗ`)
global.sessionid = '48736705854:2Tq6joffmVDzaS:24'
global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
