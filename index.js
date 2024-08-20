const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3001;

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index", "index.html"));
});

app.get("/things-to-do/sightseeing/london-attraction", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Attraction", "index.html"));
});

app.get(
  "/things-to-do/event/6987276-lion-king-the-musical-at-the-lyceum-theatre",
  (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Lion-King", "index.html"));
  }
);

app.get("/things-to-do/family-activities", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "London-For-Kids", "index.html"));
});

app.get("/things-to-do/sightseeing/royal-london", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Royal-London", "index.html"));
});

app.get("/tickets-and-offers", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Book-tickets", "index.html"));
});

app.get("/panolens", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "panolens", "index.html"));
});

app.get(
  "/things-to-do/sightseeing/sightseeing-tours/day-trips-from-london",
  (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Find-days", "index.html"));
  }
);

app.get("/things-to-do/place/593062-london-pass", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "London-attraction-pass", "index.html")
  );
});

app.get("/things-to-do/sightseeing/sightseeing-tours", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Join-a-tour", "index.html"));
});

app.get("/things-to-do/sightseeing/one-day-itineraries", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Follow-Our-itinaries", "index.html")
  );
});

app.get("/things-to-do/openspace", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Parks-And-Outdoors", "index.html")
  );
});

app.get("/things-to-do/sightseeing", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "All-Sightseeing", "index.html"));
});

app.get("/things-to-do/sightseeing", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "All-Sightseeing", "index.html"));
});

app.get(
  "/things-to-do/event/6573327-wicked-the-musical-at-the-apollo-victoria",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Wicked-London-Tickets", "index.html")
    );
  }
);

app.get(
  "/things-to-do/event/430290-mamma-mia-the-musical-at-the-novello-theatre",
  (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Mamma-Mia", "index.html"));
  }
);

app.get(
  "/things-to-do/event/430257-phantom-of-the-opera-at-his-majestys-theatre-london",
  (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Phantom-Opera", "index.html"));
  }
);

app.get(
  "/things-to-do/event/27016170-book-of-mormon-the-musical-at-the-prince-of-wales-theatre",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Book-Of-Mormon", "index.html")
    );
  }
);

app.get(
  "/things-to-do/event/17888493-matilda-the-musical-at-the-cambridge-theatre",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Matilda-the-Musical", "index.html")
    );
  }
);

app.get("/things-to-do/whats-on/theatre/musical", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Musicals-in-London", "index.html")
  );
});

app.get("/things-to-do/whats-on/theatre", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "All-Theatre", "index.html"));
});

app.get("/things-to-do/food-and-drink", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Food-And-Drink", "index.html"));
});

app.get("/things-to-do/whats-on", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Discover-Whats-On", "index.html")
  );
});

app.get("/things-to-do/experiences", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Have-Fun-With-Friends", "index.html")
  );
});

app.get("/things-to-do/nightlife", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Night-Life", "index.html"));
});

app.get("/things-to-do/shopping", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Go-Shopping", "index.html"));
});

app.get("/things-to-do/sightseeing/london-attraction/zoo", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Zoos-Wildlife-Parks", "index.html")
  );
});

app.get("/things-to-do", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "All-Things-To-Do", "index.html")
  );
});

app.get("/traveller-information/travel-to-london", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Travel-To-London", "index.html")
  );
});

app.get("/traveller-information/getting-around-london", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Get-Around-The-City", "index.html")
  );
});

app.get(
  "/traveller-information/essential-information/accessible-london",
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "public", "Accessible-London", "index.html")
    );
  }
);

app.get("/where-to-stay/hotel", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Book-a-Hotel", "index.html"));
});

app.get("/traveller-information/essential-information", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Know-The-Essentials", "index.html")
  );
});

app.get("/traveller-information", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Traveller-Information", "index.html")
  );
});

app.get("/where-to-stay", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "London-Accomodation", "index.html")
  );
});

app.get("/virtual", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Virtual", "index.html"));
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
