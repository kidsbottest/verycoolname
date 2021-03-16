const PREFIX = "ples";
const Discord = require('discord.js')
const client = new Discord.Client()
//secret commands
client.on("message", message => {
  if(message.content === "hotwheels") {
    return message.channel.send("https://cdn.discordapp.com/attachments/806252124512976967/820236039666925589/hotwheels.mp4")
  }
})
client.on("message", message => {
  if(message.content === "france") {
    return message.channel.send("https://cdn.discordapp.com/attachments/815049669582389288/820038636812632114/video0_44.mp4")
  }
})
client.on("message", message => {
  if(message.content === "cats are cute") {
    return message.channel.send("https://cdn.discordapp.com/attachments/415546586735575051/820242900641120266/image0-2.gif")
  }
})
client.on("message", message => {
  if(message.content === "E") {
    return message.channel.send("E")
  }
})
client.on("message", message => {
  if(message.content === "current version") {
    return message.channel.send("V4")
  }
})
client.on("message", message => {
  if(message.content === "e") {
    return message.channel.send("ee")
  }
})
client.on("message", message => {
  if(message.content === "ples help secret moderation") {
    return message.channel.send("this shouldnt exist anymore hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
  }
})
client.on("message", message => {
  if(message.content === "whats your name") {
    return message.channel.send("My name is Giovanni Giorgio... but everybody calls me Giorgio...")
  }
})
client.on("message", message => {
  if(message.content === "send nothing") {
    return message.channel.send("‎")
  }
})
client.on("message", message => {
  if(message.content === "hi") {
    return message.channel.send("hello there")
  }
})
client.on("message", message => {
  if(message.content === "when the impostor is sus") {
    return message.channel.send("https://cdn.discordapp.com/attachments/415546586735575051/819997278903074907/video0.mp4")
  }
})
client.on("message", message => {
  if(message.content === "dhajwkfjajdifnfnfnfnejuenfndjshhwkfwjsnsnfvdnjenfhjwndghjhsbrjhbajhegfhjgsejsehfshhjfgahvwd") {
    return message.channel.send("no way you found this this should be a secret command man very impressive (or did you look into the code from this bot hm?)")
  }
})
client.on("message", message => {
  if(message.content === "picture of a standing kat now") {
    return message.channel.send("https://images-ext-2.discordapp.net/external/iRB5lCMl_4mFzlmo66PEPeQnJpbTABJaq73LXP_2EQU/https/media.discordapp.net/attachments/806252124512976967/819838969906069525/standing_cat.png")
  }
})
//ples help stuff
client.on("message", message => {
  if(message.content === "ples help") {
    return message.channel.send("ples help fun for information about fun stuff :yey: ples help music for information about music stuff (theres a secret command)")
  }
})
client.on("message", message => {
  if(message.content === "ples help fun") {
    return message.channel.send("ples newname to give you a random name. ples my location to leak ur location. ples coolfact for a cool fact and if you wanna know my name ask whats your name ples flip coin to flip a coin. ples rps for a game of rock paper scissors. ples meem for a random meme off reddit")
  }
})
client.on("message", message => {
  if(message.content === "ples help music") {
    return message.channel.send("This will be the last thing that will probably being worked on")
  }
})
//ples fun stuff
client.on("message", message => {
  if(message.content === "ples my location") {
    return message.channel.send("You live on the world in a house :woah:")
  }
})
client.on("message", message => {
  if(message.content === "ples information") {
    return message.channel.send("Moderation commands got canceled. Fun commands being worked on the hardest. The music feature will become the last thing")
  }
})
client.on("message", message => {
  if(message.content === "ples coolfact") {
    let facts = ["Germany invented MP3 files.", "Poland actually invented vodka and not russia.", "Elon Musk is working on a brain implant which you can use to control devices per thots","Jeff bezos is no longer the richest man in the world.","fun fact: if you type fun fact at the start of ur message people will read the whole thing", "McDonald’s once made bubblegum-flavored broccoli","Maybe computers are better than a PS5 but is your pc better than a PS5?","The first oranges weren’t orange", "There’s only one letter that doesn’t appear in any U.S. state name","Scotland has 421 words for “snow”","Samsung tests phone durability with a butt-shaped robot","Peanuts aren’t technically nuts","Strawberries arent biologically berries but bananas are. MMMMMM banana","The longest English word is 189,819 letters long","Cats have fewer toes on their back paws","Blue whales eat half a million calories in one mouthful","That tiny pocket in jeans was designed to store pocket watches","Turkeys can blush olalala","Most Disney characters wear gloves to keep animation simple","The man with the world’s deepest voice can make sounds humans can’t hear"]
    message.channel.send(`${facts[Math.floor(Math.random() * facts.length)]}`)
  }
})
client.on("message", message => {
  if(message.content === "ples flip coin") {
    let coinflip = ["Your coin landed on tails.","Your coin landed on heads"]
    message.channel.send(`${coinflip[Math.floor(Math.random() * coinflip.length)]}`)
  }
})
client.on("message", message => {
  if(message.content === "ples rps") {
    let rockpaperscissors = ["Scissors","Rock","Paper"]
    message.channel.send(`${rockpaperscissors[Math.floor(Math.random() * rockpaperscissors.length)]}`)
  }
})
client.on("message", message => {
  if(message.content === "ples newname") {
    let nicknames = ["cool boi", "dum dum", "mr good sir","ricardo","cool guy", "mr under age","pink guy","YellowWater384", "the you got games on your phone? guy","mr asian math kid","kat","simp","johnnydoesasin","yo mama so fat thanos had to clap","this name shouldnt exist intense thinking","nobody.txt","im epic right?","slow pc guy","rich boi","emilgamer2143"]
    message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} is your new name`)
  }
})
//spam stuff
client.on("message", message => {
  if(message.content === "spam spam spam") {
    return message.channel.send("spam spam spam")
  }
})
client.on("message", message => {
  if(message.content === "E") {
    return message.channel.send("E")
  }
})
//dm stuff

//roast stuff
client.on("message", message => {
  if(message.content === "did i ask") {
    return message.channel.send("The world does not revolve around you we can say wat the fucc we want this is why you have no friends and will be forever lonely")
  }
})
client.on("message", message => {
  if(message.content === "KAM") {
    return message.channel.send("Oh so KAM huh? Well first of all start off with your dad but first you have to find him. The only thing is that you cant even hold a gun so i would really like to see and your dad hes in space as an astronaut and can see your mom clearly because your mom is the size of a planet And after that yall come back crying because the bills need to be payed")
  }
})
client.on("message", message => {
  if(message.content === "kam") {
    return message.channel.send("Oh so KAM huh? Well first of all start off with your dad but first you have to find him. The only thing is that you cant even hold a gun so i would really like to see and your dad hes in space as an astronaut and can see your mom clearly because your mom is the size of a planet")
  }
})
client.on("message", message => {
  if(message.content === "k a m") {
    return message.channel.send("Oh so KAM huh? Well first of all start off with your dad but first you have to find him. The only thing is that you cant even hold a gun so i would really like to see and your dad hes in space as an astronaut and can see your mom clearly because your mom is the size of a planet")
  }
})
client.on("message", message => {
  if(message.content === "fuck you") {
    return message.channel.send("Now you tryna offend us. Clearly we could but if you would try you clearly couldn't because for that you need a good amount of inches")
  }
})
client.on("message", message => {
  if(message.content === "frick you") {
    return message.channel.send("Now you tryna offend us. Clearly we could but if you would try you clearly couldn't because for that you need a good amount of inches")
  }
})
client.on("message", message => {
  if(message.content === "fucc you") {
    return message.channel.send("Now you tryna offend us. Clearly we could but if you would try you clearly couldn't because for that you need a good amount of inches")
  }
})
client.on("message", message => {
  if(message.content === "this server is trash") {
    return message.channel.send("Oh c'mon you really think your opinion mattes? You are probably so angry because your father left you and that is reasonable")
  }
})
//status
client.on("ready", () => {
  client.user.setPresence({ activity: { name: "lays fingernails"} })
})
client.login("ODE5NjQ3ODYxNjQxMTgzMjcy.YEpqjg.iEVuvcu0iCFr-qza8wDXKazwSFc")