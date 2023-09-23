//printing hello world...
//console.log("Hello, World!");
const express = require('express');
const app = express();
app.use(express.json())
// get -  reading from the server
// res - ( response ) server to client 
// req - ( request  ) client to server
// => - to create fn without fn name 
app.get('/', (req,res)=> {res.send("Rk here")})
app.get('/second', secondRoute)
app.get('/third', thirdRoute)

// params - paramter list getting from url path for dynamic routing
app.get('/dynamic/:rk',( req,res) => {
    const id = req.params.rk;
    if( id <= lst.length )
    res.send(lst[ id-1 ])     // Since, index starts from 0
    else
    res.send("notes not found")
})
//lst containing various message to display upon dynamic call in the url path
lst = [
    { "id" : 1,
        "message" : " first message"}, 
    { "id" : 2,
        "message" : " second message"},
    { "id" : 3,
        "message" : " third message"}
]


// function called upon having '/second' added in url 
//'/second' ( like variable declaration we can specify our own like ss,rk,...)
function secondRoute(req,res){
    // response given back to client upon fn() call
    res.send("1 + 1 = 10");
}
// function called upon having '/third' added in url
function thirdRoute(req,res){
    res.send("10 - 1 = 1");
}

// to show our webpage in a localhost port
// it displays the webpage in port 3000
app.listen(3000,()=>{
     console.log("webpage running on localhost:3000")
})