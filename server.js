import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve(); // es module 


app.use('/static',express.static(path.resolve(__dirname, "static"))) //decide static root "/static"


app.get("/*",(req,res) => {
  res.sendFile(path.resolve(__dirname,"static","index.html"));
})


app.listen(process.env.PORT || 3000, () =>{
  console.log("server running");
});