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

app.get("/derun-i-hisar", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Tarihimiz-Derun-i-Hisar",
      "index.html"
    )
  );
});

app.get("/gelin-odalari-ve-magaralari", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Gelin-Odalari-Ve-Magaralari",
      "index.html"
    )
  );
});

app.get("/urartu-magaralari", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Urartu-Mağaraları", "index.html")
  );
});

app.get("/in-delikleri-magaralari", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "İn-Delikleri-Magaralari",
      "index.html"
    )
  );
});

app.get("/til-hoyugu", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Til-Hoyugu", "index.html")
  );
});

app.get("/tarihimiz/kale-koyu-kalesi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Tarihimiz-Kale-Koyu-Kalesi",
      "index.html"
    )
  );
});

app.get("/tarihimiz/ambar-kalesi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Tarihimiz-Ambar-Kalesi",
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

app.get("/sivdin-koprusu", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Sivdin-Köprüsü", "index.html")
  );
});

app.get("/asagi-koprusu", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Aşağı-Köprüsü", "index.html")
  );
});

app.get("/hanim-koprusu", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Hanım-Köprüsü", "index.html")
  );
});

app.get("/sagman-camii", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Sagman-Camii", "index.html")
  );
});

app.get("/celebi-aga-camii", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Celebi-Aga-Camii", "index.html")
  );
});

app.get("/yelmaniye-camii", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Yelmaniye-Camii", "index.html")
  );
});

app.get("/etli-hatun-camii", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Etli-Hatun-Camii", "index.html")
  );
});

app.get("/inanc-merkezleri/ulukale-camii", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Ulukale-Camii", "index.html")
  );
});

app.get("/suleymaniye-kale-camii", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Süleymaniye-Kale-Camii",
      "index.html"
    )
  );
});

app.get("/goktepe-hoyugu", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Göktepe-Höyüğü", "index.html")
  );
});

app.get("/pulur-hoyugu", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Pulur-Höyüğü", "index.html")
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

app.get("/inanc-merkezleri/dervis-cemal", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "İnanc-Merkezleri-Derviş-Cemal",
      "index.html"
    )
  );
});

app.get("/inanc-merkezleri/dervis-gulabi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "İnanc-Merkezleri-Derviş-Gülabi",
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

app.get("/pir-ali-ziyareti", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Pir-Ali-Ziyareti", "index.html")
  );
});

app.get("/kureys-baba-ocagi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Kureys-Baba-Ocagi", "index.html")
  );
});

app.get("/gole-ceto-ziyareti", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Gole-Çeto-Ziyareti", "index.html")
  );
});

app.get("/coban-baba-ziyareti", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Çoban-Baba-Ziyareti", "index.html")
  );
});

app.get("/buklu-dede-ziyareti", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Büklü-Dede-Türbesi", "index.html")
  );
});

app.get("/buyuk-cesme-ziyareti", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Büyük-Çeşme-Ziyareti",
      "index.html"
    )
  );
});

app.get("/dervis-milli-turbesi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Derviş-Milli-Türbesi",
      "index.html"
    )
  );
});

app.get("/sari-saltuk-ocagi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Sarı-Saltuk-Ocağı", "index.html")
  );
});

app.get("/eli-baba-ziyareti", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Eli-Baba-Ziyareti", "index.html")
  );
});

app.get("/kal-ferat-turbesi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Kal-Ferat-Türbesi", "index.html")
  );
});

app.get("/inanc-merkezleri/sultan-hidir", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Sultan-Hıdır", "index.html")
  );
});

app.get("/aguicen-turbesi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Ağuiçen-Türbesi", "index.html")
  );
});

app.get("/seyit-kasim-turbesi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Seyit-Kasım-Türbesi", "index.html")
  );
});

app.get("/seyit-mahmut-ocagi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Seyit-Mahmut-Ocağı", "index.html")
  );
});

app.get("/baba-mansur-ocagi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Baba-Mansur-Ocağı", "index.html")
  );
});

app.get("/celebi-baba-ziyareti", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Çelebi-Baba-Ziyareti",
      "index.html"
    )
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
