const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(`here is the hompage`)
        console.log('you in the home page')
    }else if(req.url === '/about'){
        res.end(`this is the about <a href ="localhot:3000/homeG">Go dummy</a> <button onclick="/">go home<`)
        console.log('you in the about section')
    } else{
        res.end(`<h1>OOPS SORRy</h1>
               <p>this site cannot be  </p>
               <a href="/">Go home</a> `)
    }
})


server.listen(3000)