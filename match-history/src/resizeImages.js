const sharp = require('sharp')
const fs = require('fs')

const files = [
"Emblem_Iron.png",
"Emblem_Bronze.png",
"Emblem_Silver.png",
"Emblem_Gold.png",
"Emblem_Platinum.png",
"Emblem_Diamond.png",
"Emblem_Master.png",
"Emblem_Grandmaster.png",
"Emblem_Challenger.png"]

for(const name of files) {
    let new_name = name.replace('.png', '_sm.png')
    sharp(`./src/img/${name}`)
    .resize(100)
    .toBuffer()
    .then( data => {  
        fs.writeFileSync(`./src/img/${new_name}`, data)
    })
    .catch( err => { console.log(err) })
}