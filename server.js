const express = require("express");
const path = require("path");

const app = express();

// Railway fournit le port automatiquement
const PORT = process.env.PORT || 3000;

// servir les fichiers statiques
app.use(express.static(__dirname));

// route principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// démarrage serveur
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});