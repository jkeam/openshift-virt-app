import express from 'express';
import ViteExpress from 'vite-express';
import fetch from 'node-fetch';
import 'dotenv/config';

const API_BASE_URL = process.env.API_BASE_URL;

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.get("/api/vms", async (req, res) => {
  try {
    const url = `http://${API_BASE_URL}/vms`;
    const options = {
      method: 'GET'
    };
    const callResponse = await fetch(url, options);
    const json = await callResponse.json();
    res.json(json);
  } catch (err) {
    console.log(err);
  }
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
