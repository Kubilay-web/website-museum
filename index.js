const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  // Temiz URL oluştur
  const cleanUrl = req.protocol + "://" + req.get("host") + req.path;

  // Eğer sorgu parametreleri varsa yönlendir
  if (req.query && Object.keys(req.query).length > 0) {
    return res.redirect(cleanUrl);
  }

  next(); // İleriye devam et
});

app.use(express.static(path.join(__dirname, "/public")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index", "index.html"));
});

app.get("/tarihimiz/hepsini-goruntuleyin", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Tarihimiz-Hepsi", "index.html")
  );
});

app.get("/inanc-merkezleri/hepsini-goruntuleyin", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "İnanç-Merkezleri-Hepsi",
      "index.html"
    )
  );
});

app.get("/sehirici-ulasim", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index", "Ulasım", "index.html"));
});

app.get("/dersim-stiftung", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Stiftung", "index.html")
  );
});

app.get("/dersim/cemisgezek", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Cemişgezek", "index.html")
  );
});

app.get("/dersim/hozat", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Hozat", "index.html")
  );
});

app.get("/dersim/mazgirt", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Mazgirt", "index.html")
  );
});

app.get("/dersim/nazimiye", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Nazımiye", "index.html")
  );
});

app.get("/dersim/ovacik", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Ovacık", "index.html")
  );
});

app.get("/dersim/pertek", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Pertek", "index.html")
  );
});

app.get("/dersim/pulumur", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Pülümür", "index.html")
  );
});

app.get("/tarihimiz/anit-cinar-agaci", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Tarihimiz-Anıt-Cınar-Agacı",
      "index.html"
    )
  );
});

app.get("/tarihimiz/bagin-kalesi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Tarihimiz-Bagın-Kalesi",
      "index.html"
    )
  );
});

app.get("/tarihimiz/dervis-hucreleri", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Tarihimiz-Dervis-Hücreleri",
      "index.html"
    )
  );
});

app.get("/tarihimiz/ergen-kilisesi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Tarihimiz-Ergen-Kilisesi",
      "index.html"
    )
  );
});

app.get("/golbagi-ermeni-kilisesi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Gölbağı-Ermeni-Kilisesi",
      "index.html"
    )
  );
});

app.get("/tarihimiz/koc-mezar", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Tarihimiz-Koc-Mezar", "index.html")
  );
});

app.get("/tarihimiz/mazgirt-kalesi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Tarihimiz-Mazgirt-Kalesi",
      "index.html"
    )
  );
});

app.get("/tarihimiz/pertek-kalesi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Tarihimiz-Pertek-Kalesi",
      "index.html"
    )
  );
});

app.get("/tarihimiz/sungur-bey-camii", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Tarihimiz-Sungur-Bey-Camii",
      "index.html"
    )
  );
});

app.get("/tarihimiz/tarihimiz-tahar-koprusu", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Tarihimiz-Tahar-Koprusu",
      "index.html"
    )
  );
});

app.get("/inanc-merkezleri/ulukale-camii", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Ulukale-Camii", "index.html")
  );
});

app.get("/inanc-merkezleri/ana-fatma-ziyareti", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "İnanc-Merkezleri-Ana-Fatma-Ziyareti",
      "index.html"
    )
  );
});

app.get("/inanc-merkezleri/duzgun-baba", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "İnanc-Merkezleri-Düzgün-Baba",
      "index.html"
    )
  );
});

app.get("/inanc-merkezleri/kirklar-dagi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "İnanc-Merkezleri-Kırklar-Dağı",
      "index.html"
    )
  );
});

app.get("/inanc-merkezleri/munzur-baba", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "İnanc-Merkezleri-Munzur-Baba",
      "index.html"
    )
  );
});

app.get("/inanc-merkezleri/pir-sultan-abdal", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "İnanc-Merkezleri-Pir-Sultan-Abdal",
      "index.html"
    )
  );
});

app.get("/aktiviteler/dersim-kaplicalari", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Aktiviteler-Dersim-Kaplıcalar",
      "index.html"
    )
  );
});

app.get("/aktiviteler/dersim-muzesi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Aktiviteler-Dersim-Müzesi",
      "index.html"
    )
  );
});

app.get("/aktiviteler/geleneksel-el-sanatlari", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Aktiviteler-Geleneksel-El-Sanatları",
      "index.html"
    )
  );
});

app.get("/aktiviteler/doga-sporlari", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Aktiviteler-Kış-Doğa-Sporları",
      "index.html"
    )
  );
});

app.get("/aktiviteler/dersim-mutfagi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Aktiviteler-Dersim-Mutfağı",
      "index.html"
    )
  );
});

app.get("/aktiviteler/munzur-milli-parki", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Aktiviteler-Munzur-Milli-Parkı",
      "index.html"
    )
  );
});

app.get("/aktiviteler/saz-kulturu", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Aktiviteler-Saz-Kültürü",
      "index.html"
    )
  );
});

app.get("/sari-saltuk-ocagi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Sarı-Saltuk-Ocağı", "index.html")
  );
});

app.get("/inanc-merkezleri/sultan-hidir", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Sultan-Hıdır", "index.html")
  );
});

app.get("/inanc-merkezleri/kureys-baba", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Kureyş-Baba", "index.html")
  );
});

app.get("/inanc-merkezleri/tunceli-cem-evi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Tunceli-Cem-Evi", "index.html")
  );
});

app.get("/tarihimiz/ulukale", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Ulukale", "index.html")
  );
});

// TURKİSH END

//GERMAN

app.get("/de", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index-German", "index.html"));
});

//GERMAN END

//ENGLİSH

app.get("/en", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index-English", "index.html"));
});

//ENGLİSH

//KURDİSH//
app.get("/kr", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index-Kurdish", "index.html"));
});

//KURDİSH//

//Zazaki//
app.get("/zaz", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index-Zaza", "index.html"));
});

//Zazaki//

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
