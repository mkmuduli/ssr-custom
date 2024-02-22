import "babel-polyfill";

import express from "express";
import renderer from "./helper/renderer";
import createStore from "./helper/createStore";
import fetchServerAPI from "./helper/fetchServerAPI";

// constant
const PORT = 3000;

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  fetchServerAPI(req, store).then(()=>{
    res.send(renderer(req, store));
  })
});

app.listen(PORT, () => {
  console.log(`app listen on ${PORT}`);
});
