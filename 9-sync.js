//this is a synchronous js folder help to write and txt files in javavscript

const {readFileSync,writeFileSync} = require("fs");
console.log("start")
const first  = readFileSync("./content/first.txt","utf-8")

const second = readFileSync("./content/second.txt","utf-8")







console.log(first,second)


writeFileSync('./content/result-sync.txt',`here is the result: ${first}, and ${second}`,{flag: 'a'})
console.log("done with the task")
console.log("starting the next one...")
