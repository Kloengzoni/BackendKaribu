const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir tous les fichiers statiques depuis la racine (images, vidéos, css, js)
app.use(express.static(path.join(__dirname)));

// Route principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Karibu server running on port ${PORT}`);
});