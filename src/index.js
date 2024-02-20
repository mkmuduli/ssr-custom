const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const Home = require('./client/component/Home').default;

// constant
const PORT = 3000;

const app = express();

app.get("/",(req, res)=>{
   const content =  renderToString(<Home />);

   return res.send(content)
})

app.listen(PORT,()=>{
    console.log(`app listen on ${PORT}`)
})