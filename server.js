import express from 'express';
import path from 'path';
import fetch from 'node-fetch';

const app = express();
const __dirname = path.resolve(); // es module 

//test

const http = "http://localhost:3300/post";

const asyncRequestHttp = async () =>{
  const response = await fetch (http,{
    method:"POST"
  });
  const data = await response.json();
  console.log(data);
}


app.use('/static',express.static(path.resolve(__dirname, "static"))) //decide static root "/static"


app.get("/*",(req,res) => {
  res.sendFile(path.resolve(__dirname,"static","index.html"));
})

//test
app.post("/post",(req,res) => {
  console.log("hihi");
  asyncRequestHttp();
})


app.listen(process.env.PORT || 3000, () =>{
  console.log("server running");
});