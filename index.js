const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "*", // Herhangi bir kaynaktan gelen isteklere izin verir
  })
);

app.use(express.static(path.join(__dirname, "/public")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index", "index.html"));
});

app.get("/things-to-do/sightseeing/london-attraction", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Attraction", "index.html")
  );
});

app.get(
  "/things-to-do/event/6987276-lion-king-the-musical-at-the-lyceum-theatre",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Lion-King", "index.html")
    );
  }
);

app.get("/things-to-do/family-activities", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "London-For-Kids", "index.html")
  );
});

app.get("/things-to-do/sightseeing/royal-london", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Royal-London", "index.html")
  );
});

app.get("/tickets-and-offers", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Book-tickets", "index.html")
  );
});

app.get(
  "/things-to-do/sightseeing/sightseeing-tours/day-trips-from-london",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Find-days", "index.html")
    );
  }
);

app.get("/things-to-do/place/593062-london-pass", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "London-attraction-pass",
      "index.html"
    )
  );
});

app.get("/things-to-do/sightseeing/sightseeing-tours", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Join-a-tour", "index.html")
  );
});

app.get("/things-to-do/sightseeing/one-day-itineraries", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Follow-Our-itinaries",
      "index.html"
    )
  );
});

app.get("/things-to-do/openspace", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Parks-And-Outdoors", "index.html")
  );
});

app.get("/things-to-do/sightseeing", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "All-Sightseeing", "index.html")
  );
});

app.get("/things-to-do/sightseeing", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "All-Sightseeing", "index.html"));
});

app.get(
  "/things-to-do/event/6573327-wicked-the-musical-at-the-apollo-victoria",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "public",
        "Index",
        "Wicked-London-Tickets",
        "index.html"
      )
    );
  }
);

app.get(
  "/things-to-do/event/430290-mamma-mia-the-musical-at-the-novello-theatre",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Mamma-Mia", "index.html")
    );
  }
);

app.get(
  "/things-to-do/event/430257-phantom-of-the-opera-at-his-majestys-theatre-london",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Phantom-Opera", "index.html")
    );
  }
);

app.get(
  "/things-to-do/event/27016170-book-of-mormon-the-musical-at-the-prince-of-wales-theatre",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Book-Of-Mormon", "index.html")
    );
  }
);

app.get(
  "/things-to-do/event/17888493-matilda-the-musical-at-the-cambridge-theatre",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "public",
        "Index",
        "Matilda-the-Musical",
        "index.html"
      )
    );
  }
);

app.get("/things-to-do/whats-on/theatre/musical", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Musicals-in-London", "index.html")
  );
});

app.get("/things-to-do/whats-on/theatre", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "All-Theatre", "index.html")
  );
});

app.get("/things-to-do/food-and-drink", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Food-And-Drink", "index.html")
  );
});

app.get("/things-to-do/whats-on", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Discover-Whats-On", "index.html")
  );
});

app.get("/things-to-do/experiences", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Have-Fun-With-Friends",
      "index.html"
    )
  );
});

app.get("/things-to-do/nightlife", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Night-Life", "index.html")
  );
});

app.get("/things-to-do/shopping", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Go-Shopping", "index.html")
  );
});

app.get("/things-to-do/sightseeing/london-attraction/zoo", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Zoos-Wildlife-Parks", "index.html")
  );
});

app.get("/things-to-do", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "All-Things-To-Do", "index.html")
  );
});

app.get("/sehirici-ulasim/travel-to-london", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Travel-To-London", "index.html")
  );
});

app.get("/sehirici-ulasim/getting-around-london", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Get-Around-The-City", "index.html")
  );
});

app.get(
  "/sehirici-ulasim/essential-information/accessible-london",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Accessible-London", "index.html")
    );
  }
);

app.get("/dersim-stiftung/hotel", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Book-a-Hotel", "index.html")
  );
});

app.get("/sehirici-ulasim/essential-information", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Know-The-Essentials", "index.html")
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

app.get("/virtual", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Virtual", "index.html")
  );
});

app.get("/things-to-do/place/427311-buckingham-palace", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Must-Sees-1", "index.html")
  );
});

app.get("/things-to-do/event/32392658-hop-on-hop-off-bus-tour", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Must-Sees-2", "index.html")
  );
});

app.get(
  "/things-to-do/place/23035130-warner-bros-studio-tour-london-the-making-of-harry-potter",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Must-Sees-3", "index.html")
    );
  }
);

app.get("/things-to-do/whats-on/theatre/top-ten-musicals", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Explorer-1", "index.html")
  );
});

app.get(
  "/things-to-do/sightseeing/sightseeing-tours/top-london-tours",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Explorer-2", "index.html")
    );
  }
);

app.get(
  "/things-to-do/sightseeing/london-attraction/top-ten-attractions",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Explorer-3", "index.html")
    );
  }
);

app.get(
  "/things-to-do/sightseeing/which-london-sightseeing-pass",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Save-Ideas-1", "index.html")
    );
  }
);

app.get("/things-to-do/budget-london", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Save-Ideas-2", "index.html")
  );
});

app.get(
  "/sehirici-ulasim/place/48383714-go-city-london-explorer-pass",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Save-Ideas-3", "index.html")
    );
  }
);

app.get("/Whats-Coming-1", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Whats-Coming-1", "index.html")
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

// ----------------------------------

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

// ------------------------------------------------------

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

app.get("/de/things-to-do/sightseeing/london-attraction", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Attraction", "index.html")
  );
});

app.get(
  "/things-to-do/event/6987276-lion-king-the-musical-at-the-lyceum-theatre",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Lion-King", "index.html")
    );
  }
);

app.get("/de/things-to-do/family-activities", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "London-For-Kids", "index.html")
  );
});

app.get("/de/things-to-do/sightseeing/royal-london", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Royal-London", "index.html")
  );
});

app.get("/de/tickets-and-offers", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Book-tickets", "index.html")
  );
});

app.get(
  "/things-to-do/sightseeing/sightseeing-tours/day-trips-from-london",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Find-days", "index.html")
    );
  }
);

app.get("/de/things-to-do/place/593062-london-pass", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "London-attraction-pass",
      "index.html"
    )
  );
});

app.get("/de/things-to-do/sightseeing/sightseeing-tours", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Join-a-tour", "index.html")
  );
});

app.get("/de/things-to-do/sightseeing/one-day-itineraries", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Follow-Our-itinaries",
      "index.html"
    )
  );
});

app.get("/de/things-to-do/openspace", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Parks-And-Outdoors", "index.html")
  );
});

app.get("/de/things-to-do/sightseeing", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "All-Sightseeing", "index.html")
  );
});

app.get("/de/things-to-do/sightseeing", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "All-Sightseeing", "index.html"));
});

app.get(
  "/things-to-do/event/6573327-wicked-the-musical-at-the-apollo-victoria",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "public",
        "Index",
        "Wicked-London-Tickets",
        "index.html"
      )
    );
  }
);

app.get(
  "/things-to-do/event/430290-mamma-mia-the-musical-at-the-novello-theatre",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Mamma-Mia", "index.html")
    );
  }
);

app.get(
  "/things-to-do/event/430257-phantom-of-the-opera-at-his-majestys-theatre-london",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Phantom-Opera", "index.html")
    );
  }
);

app.get(
  "/things-to-do/event/27016170-book-of-mormon-the-musical-at-the-prince-of-wales-theatre",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Book-Of-Mormon", "index.html")
    );
  }
);

app.get(
  "/things-to-do/event/17888493-matilda-the-musical-at-the-cambridge-theatre",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "public",
        "Index",
        "Matilda-the-Musical",
        "index.html"
      )
    );
  }
);

app.get("/de/things-to-do/whats-on/theatre/musical", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Musicals-in-London", "index.html")
  );
});

app.get("/de/things-to-do/whats-on/theatre", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "All-Theatre", "index.html")
  );
});

app.get("/de/things-to-do/food-and-drink", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Food-And-Drink", "index.html")
  );
});

app.get("/de/things-to-do/whats-on", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Discover-Whats-On", "index.html")
  );
});

app.get("/de/things-to-do/experiences", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index",
      "Have-Fun-With-Friends",
      "index.html"
    )
  );
});

app.get("/de/things-to-do/nightlife", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Night-Life", "index.html")
  );
});

app.get("/de/things-to-do/shopping", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Go-Shopping", "index.html")
  );
});

app.get("/de/things-to-do/sightseeing/london-attraction/zoo", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Zoos-Wildlife-Parks", "index.html")
  );
});

app.get("/de/things-to-do", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "All-Things-To-Do", "index.html")
  );
});

app.get("/de/sehirici-ulasim/travel-to-london", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Travel-To-London", "index.html")
  );
});

app.get("/de/sehirici-ulasim/getting-around-london", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Get-Around-The-City", "index.html")
  );
});

app.get(
  "/sehirici-ulasim/essential-information/accessible-london",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Accessible-London", "index.html")
    );
  }
);

app.get("/de/dersim-stiftung/hotel", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Book-a-Hotel", "index.html")
  );
});

app.get("/de/sehirici-ulasim/essential-information", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Know-The-Essentials", "index.html")
  );
});

app.get("/de/sehirici-ulasim", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index", "Ulasım", "index.html"));
});

app.get("/de/dersim-stiftung", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Stiftung", "index.html")
  );
});

app.get("/de/virtual", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Virtual", "index.html")
  );
});

app.get("/de/things-to-do/place/427311-buckingham-palace", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Must-Sees-1", "index.html")
  );
});

app.get(
  "/de/things-to-do/event/32392658-hop-on-hop-off-bus-tour",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Must-Sees-2", "index.html")
    );
  }
);

app.get(
  "/things-to-do/place/23035130-warner-bros-studio-tour-london-the-making-of-harry-potter",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Must-Sees-3", "index.html")
    );
  }
);

app.get("/de/things-to-do/whats-on/theatre/top-ten-musicals", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Explorer-1", "index.html")
  );
});

app.get(
  "/things-to-do/sightseeing/sightseeing-tours/top-london-tours",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Explorer-2", "index.html")
    );
  }
);

app.get(
  "/things-to-do/sightseeing/london-attraction/top-ten-attractions",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Explorer-3", "index.html")
    );
  }
);

app.get(
  "/things-to-do/sightseeing/which-london-sightseeing-pass",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Save-Ideas-1", "index.html")
    );
  }
);

app.get("/de/things-to-do/budget-london", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Save-Ideas-2", "index.html")
  );
});

app.get(
  "/sehirici-ulasim/place/48383714-go-city-london-explorer-pass",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Index", "Save-Ideas-3", "index.html")
    );
  }
);

app.get("/de/Whats-Coming-1", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Whats-Coming-1", "index.html")
  );
});

app.get("/de/dersim/cemisgezek", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Cemişgezek", "index.html")
  );
});

app.get("/de/dersim/hozat", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Hozat", "index.html")
  );
});

app.get("/de/dersim/mazgirt", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Mazgirt", "index.html")
  );
});

app.get("/de/dersim/nazimiye", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Nazımiye", "index.html")
  );
});

app.get("/de/dersim/ovacik", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Ovacık", "index.html")
  );
});

app.get("/de/dersim/pertek", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Pertek", "index.html")
  );
});

app.get("/de/dersim/pulumur", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Dersim-Pülümür", "index.html")
  );
});

app.get("/de/tarihimiz/anit-cinar-agaci", (req, res) => {
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

app.get("/de/tarihimiz/bagin-kalesi", (req, res) => {
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

app.get("/de/tarihimiz/dervis-hucreleri", (req, res) => {
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

app.get("/de/tarihimiz/ergen-kilisesi", (req, res) => {
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

app.get("/de/golbagi-ermeni-kilisesi", (req, res) => {
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

app.get("/de/tarihimiz/koc-mezar", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Tarihimiz-Koc-Mezar", "index.html")
  );
});

app.get("/de/tarihimiz/mazgirt-kalesi", (req, res) => {
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

app.get("/de/tarihimiz/pertek-kalesi", (req, res) => {
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

app.get("/de/tarihimiz/sungur-bey-camii", (req, res) => {
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

app.get("/de/derun-i-hisar", (req, res) => {
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

app.get("/de/gelin-odalari-ve-magaralari", (req, res) => {
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

app.get("/de/urartu-magaralari", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Urartu-Mağaraları", "index.html")
  );
});

app.get("/de/in-delikleri-magaralari", (req, res) => {
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

app.get("/de/til-hoyugu", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Til-Hoyugu", "index.html")
  );
});

app.get("/de/tarihimiz/kale-koyu-kalesi", (req, res) => {
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

app.get("/de/tarihimiz/ambar-kalesi", (req, res) => {
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

app.get("/de/tarihimiz/tarihimiz-tahar-koprusu", (req, res) => {
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

app.get("/de/sivdin-koprusu", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Sivdin-Köprüsü", "index.html")
  );
});

app.get("/de/asagi-koprusu", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Aşağı-Köprüsü", "index.html")
  );
});

app.get("/de/hanim-koprusu", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Hanım-Köprüsü", "index.html")
  );
});

app.get("/de/sagman-camii", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Sagman-Camii", "index.html")
  );
});

app.get("/de/celebi-aga-camii", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Celebi-Aga-Camii", "index.html")
  );
});

app.get("/de/yelmaniye-camii", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Yelmaniye-Camii", "index.html")
  );
});

app.get("/de/etli-hatun-camii", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Etli-Hatun-Camii", "index.html")
  );
});

app.get("/de/inanc-merkezleri/ulukale-camii", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Ulukale-Camii", "index.html")
  );
});

app.get("/de/suleymaniye-kale-camii", (req, res) => {
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

app.get("/de/goktepe-hoyugu", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Göktepe-Höyüğü", "index.html")
  );
});

app.get("/de/pulur-hoyugu", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Pulur-Höyüğü", "index.html")
  );
});

app.get("/de/inanc-merkezleri/ana-fatma-ziyareti", (req, res) => {
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

app.get("/de/inanc-merkezleri/dervis-cemal", (req, res) => {
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

app.get("/de/inanc-merkezleri/dervis-gulabi", (req, res) => {
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

app.get("/de/inanc-merkezleri/duzgun-baba", (req, res) => {
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

app.get("/de/inanc-merkezleri/kirklar-dagi", (req, res) => {
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

app.get("/de/inanc-merkezleri/munzur-baba", (req, res) => {
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

app.get("/de/inanc-merkezleri/pir-sultan-abdal", (req, res) => {
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

// ----------------------------------

app.get("/de/aktiviteler/dersim-kaplicalari", (req, res) => {
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

app.get("/de/aktiviteler/dersim-muzesi", (req, res) => {
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

app.get("/de/aktiviteler/geleneksel-el-sanatlari", (req, res) => {
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

app.get("/de/aktiviteler/doga-sporlari", (req, res) => {
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

app.get("/de/aktiviteler/dersim-mutfagi", (req, res) => {
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

app.get("/de/aktiviteler/munzur-milli-parki", (req, res) => {
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

app.get("/de/aktiviteler/saz-kulturu", (req, res) => {
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

// ------------------------------------------------------

app.get("/de/pir-ali-ziyareti", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Pir-Ali-Ziyareti", "index.html")
  );
});

app.get("/de/kureys-baba-ocagi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Kureys-Baba-Ocagi", "index.html")
  );
});

app.get("/de/gole-ceto-ziyareti", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Gole-Çeto-Ziyareti", "index.html")
  );
});

app.get("/de/coban-baba-ziyareti", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Çoban-Baba-Ziyareti", "index.html")
  );
});

app.get("/de/buklu-dede-ziyareti", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Büklü-Dede-Türbesi", "index.html")
  );
});

app.get("/de/buyuk-cesme-ziyareti", (req, res) => {
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

app.get("/de/dervis-milli-turbesi", (req, res) => {
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

app.get("/de/sari-saltuk-ocagi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Sarı-Saltuk-Ocağı", "index.html")
  );
});

app.get("/de/eli-baba-ziyareti", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Eli-Baba-Ziyareti", "index.html")
  );
});

app.get("/de/kal-ferat-turbesi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Kal-Ferat-Türbesi", "index.html")
  );
});

app.get("/de/inanc-merkezleri/sultan-hidir", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Sultan-Hıdır", "index.html")
  );
});

app.get("/de/aguicen-turbesi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Ağuiçen-Türbesi", "index.html")
  );
});

app.get("/de/seyit-kasim-turbesi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Seyit-Kasım-Türbesi", "index.html")
  );
});

app.get("/de/seyit-mahmut-ocagi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Seyit-Mahmut-Ocağı", "index.html")
  );
});

app.get("/de/baba-mansur-ocagi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Baba-Mansur-Ocağı", "index.html")
  );
});

app.get("/de/celebi-baba-ziyareti", (req, res) => {
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

app.get("/de/inanc-merkezleri/kureys-baba", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Kureyş-Baba", "index.html")
  );
});

app.get("/de/inanc-merkezleri/tunceli-cem-evi", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Tunceli-Cem-Evi", "index.html")
  );
});

app.get("/de/tarihimiz/ulukale", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index", "Ulukale", "index.html")
  );
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
