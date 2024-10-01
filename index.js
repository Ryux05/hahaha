const express = require("express");
const app = express();
const port = 3000;
//const deltaNew = require("./deltaNew.js");
const delta = require("./delta-obfuscated");
const { URL } = require("url"); // Import URL dari Node.js untuk validasi
const axios = require("axios");

app.get("/", (req, res) => {
  res.send("brbrbrb");
});

app.get("/api/delta", async function (req, res) {
  let url = req.query.u;
  // Cek apakah query parameter 'u' ada
  if (!url) {
    return res.status(400).json({
      success: false,
      message: 'Query parameter "u" belum diisi',
    });
  }

  // Validasi apakah URL valid
  try {
    new URL(url); // Jika URL tidak valid, akan memicu error
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Invalid URL",
    });
  }

  // Jika URL valid, proses 'delta' dengan nilai 'url'
  try {
    const deltaNew = await delta(url);
    res.json(deltaNew);
  } catch (error) {
    // Jika terjadi error di fungsi delta
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

app.listen(port, () =>
  console.log(
    "sudah siap, silakan buka browser\n" +
      "localhost:" +
      port
  )
);
