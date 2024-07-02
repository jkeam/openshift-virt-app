import express from 'express';
import ViteExpress from 'vite-express';
import fetch from 'node-fetch';
import 'dotenv/config';

const API_BASE_URL = process.env.API_BASE_URL;

const app = express();

const baseGet = async (path) => {
  try {
    const url = `${API_BASE_URL}${path}`;
    const options = {
      method: 'GET'
    };
    const callResponse = await fetch(url, options);
    const json = await callResponse.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

app.get("/api/healthz", (req, res) => {
  res.json({"status": "alive"});
});

app.get("/api/vms", async (req, res) => {
  const json = await baseGet("/vms");
  res.json(json);
});

app.get("/api/nodes", async (req, res) => {
  const json = await baseGet("/nodes");
  res.json(json);
});

app.get("/api/storages", async (req, res) => {
  const json = await baseGet("/storages");
  res.json(json);
});

app.get("/api/vmnamespaces", async (req, res) => {
  const json = await baseGet("/vmnamespaces");
  res.json(json);
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
