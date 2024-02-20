import express from 'express';
import renderer from './helper/renderer';

// constant
const PORT = 3000;

const app = express();

app.use(express.static("public"))

app.get("/",(req, res)=>{
    
   return res.send(renderer())
})

app.listen(PORT,()=>{
    console.log(`app listen on ${PORT}`)
})