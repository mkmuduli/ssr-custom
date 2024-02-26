import "babel-polyfill";

import express from "express";
import renderer from "./helper/renderer";
import createStore from "./helper/createStore";
import fetchServerAPI from "./helper/fetchServerAPI";
import proxy from 'express-http-proxy';

// constant
const PORT = 3000;

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);
  fetchServerAPI(req, store).then(()=>{
    res.send(renderer(req, store));
  })
});

app.listen(PORT, () => {
  console.log(`app listen on ${PORT}`);
});
