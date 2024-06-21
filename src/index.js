import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import nodemon from "nodemon";
import "dotenv/config";
const PORT = process.env.PORT || 3000;
const API = process.env.API;
const server = express();

server.get("/", async (req, res) => {
  try {
    const { data } = await axios.get(API);
    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "Algo salio mal" });
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
