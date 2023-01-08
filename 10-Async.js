//this is the A sync type of javascript to communicate with txt file module 
const {readFile,writeFile} = require("fs");
console.log("start")
const { resourceLimits } = require("worker_threads");


readFile('./content/first.txt','utf-8',(err,result) =>{
    if(err){
        console.log(err)
        return;
    }
    
    const first = result
    console.log(first)
   readFile('./content/second.txt','utf-8',(err,result) =>{
    if(err){
        console.log(err)
        return;
    }
    const second = result

    console.log(second)
    writeFile(`./content/result-asyncF.txt`,`there result is: ${first}, ${second}`,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log("result was supposed to be here")
        }
    })
    
   })
})

console.log("done with the task")
console.log("starting the next one")