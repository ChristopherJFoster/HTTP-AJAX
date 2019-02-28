const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Commented these out because I'm using uuid to generate ids:
// let nextId = 7;
// function getNewId() {
//   return nextId++;
// }

let friends = [
  {
    id: "a4a5c672-9696-4523-b57d-a3db47b6422d",
    name: "Apple",
    age: 27,
    email: "apple@gmail.com",
    color: "gold",
    favefood: "sunlight",
    quotation: "An apple a day...terrifies me."
  },
  {
    id: "37b81aec-6af0-426d-9d4c-9fa5cc1e0d8c",
    name: "Book",
    age: 23,
    email: "book@gmail.com",
    color: "parchment",
    favefood: "thoughts",
    quotation: "You may judge me by my cover."
  },
  {
    id: "39a853e0-e241-4b60-89e1-7b3dc702590f",
    name: "Carbon",
    age: 68,
    email: "carbon@gmail.com",
    color: "dark grey",
    favefood: "everything",
    quotation:
      "No one ever heard of carbon poisoning. Not _just_ carbon anyway..."
  },
  {
    id: "67e29dfe-959e-491c-ac6d-6ead940c9e4f",
    name: "Diligence",
    age: 39,
    email: "diligence@gmail.com",
    color: "navy",
    favefood: "perseverence",
    quotation:
      "Genius is 1% inspiration and 99% me. Think about that for a minute. Now get back to work."
  },
  {
    id: "2677f21f-b371-4a1c-8c40-c614c0eb36a5",
    name: "Estuary",
    age: 47,
    email: "estuary@gmail.com",
    color: "tan",
    favefood: "silt",
    quotation: "Grahhbbllllhleh..."
  },
  {
    id: "c3bf9686-9023-4496-b72a-53d13b837c98",
    name: "Thursday",
    age: 22,
    email: "thursday@gmail.com",
    color: "cinnamon",
    favefood: "afternoons",
    quotation: "Sigh."
  }
];

app.use(cors());
app.use(bodyParser.json());

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.post("/friends", (req, res) => {
  // Commented this out because I'm using uuid to generate ids:
  // const friend = { id: getNewId(), ...req.body };
  const friend = { ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

// Aha! I figured out to make a put request using the submitted friend id (rather than a friend-specific url):
app.put("/friends", (req, res) => {
  const id = req.body.id;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(req.body);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

// Can't get delete to work. From what I can tell, req.body is empty, even though I (think I) am passing in the id of the friend to delete:
app.delete("/friends", (req, res) => {
  const id = req.body.id;
  friends = friends.filter(friend => friend.id != id);
  res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
