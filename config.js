//=============ใ Utama ใ================== //
global.owner = ['6281384200380'] 
global.mods = ['6281384200380'] 
global.prems = ['6281384200380'] 

//=============ใ Info Owner ใ============== //
global.nameowner = '๐ฃ๐๐๐ ๐ฒ๐๐๐๐พ ใ๐งใ'
global.numberowner = '6281384200380'
global.instagram = 'https://instagram.com/dhykkkz'
global.github = 'https://github.com/SDhyka'
global.dana = '081384200380'
global.pulsa = '081384200380'
global.gopay = '081384200380'

//=============ใ Info Bot ใ=================//
global.namebot = ' Ayyna - MDยฒ ๐'
global.gc = 'https://chat.whatsapp.com/Daqh39CFd1I0WmuOqg73Ar'
global.web = 'lynk.id/hyuuraofc' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = '1 bulan = 10.000\n2 Minggu 7.000\n1 Minggu 5.000'

//=======ใ Tampilan Dan Lainnya ใ============//
global.fotonya1 = 'https://telegra.ph/file/e4a2f4339da8a32ad20a1.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/8c471d45b6cedad43cf84.jpg' //ini juga ganti 
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = ' Ayyna - MDยฒ ๐'
global.watermark = wm
global.wm2 = ' Ayyna - MDยฒ ๐'
global.wm3 = ' Ayyna - MDยฒ ๐'
global.htki = 'โโโโโโใ' 
global.htka = 'ใโโโโโโ'
global.media = 'https://telegra.ph/file/72168c6f1aaa90315c369.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '_*tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar โ\n'
global.salah = 'Salah โ\n'
global.stiker_wait = 'Stiker sedang dibuat'
global.packname = '><'
global.author = 'ยฉ Ayna'

//=============ใ Apikey ใ================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//=============ใ RPG GAMES ใ================== //
global.multiplier = 1000 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: 'โ๏ธ',
      money: '๐ต',
      potion: '๐ฅค',
      diamond: '๐',
      common: '๐ฆ',
      uncommon: '๐',
      mythic: '๐ณ๏ธ',
      legendary: '๐๏ธ',
      pet: '๐',
      sampah: '๐',
      armor: '๐ฅผ',
      sword: 'โ๏ธ',
      kayu: '๐ชต',
      batu: '๐ชจ',
      string: '๐ธ๏ธ',
      kuda: '๐',
      kucing: '๐' ,
      anjing: '๐',
      petFood: '๐',
      gold: '๐',
      emerald: '๐'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========ใ Jangan Di Ubah ใ================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
