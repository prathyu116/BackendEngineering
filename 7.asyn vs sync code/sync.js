const fs = require("fs")

console.log("1")

const res = fs.readFileSync("hi.txt")

console.log('res' , res.toString())

console.log("2")