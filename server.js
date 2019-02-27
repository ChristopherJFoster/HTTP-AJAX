const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

// let friends = [
//   {
//     id: 1,
//     name: 'Ben',
//     age: 30,
//     email: 'ben@lambdaschool.com',
//   },
//   {
//     id: 2,
//     name: 'Austen',
//     age: 32,
//     email: 'austen@lambdaschool.com',
//   },
//   {
//     id: 3,
//     name: 'Ryan',
//     age: 35,
//     email: 'ryan@lambdaschool.com',
//   },
//   {
//     id: 4,
//     name: 'Sean',
//     age: 35,
//     email: 'sean@lambdaschool.com',
//   },
//   {
//     id: 5,
//     name: 'Michelle',
//     age: 67,
//     email: 'michelle@gmail.com',
//   },
//   {
//     id: 6,
//     name: 'Luis',
//     age: 47,
//     email: 'luis@lambdaschool.com',
//   },
// ];

const friends = [
  {
    id: 1,
    name: "Apple",
    age: 27,
    email: "apple@gmail.com",
    color: "gold",
    favefood: "sunlight",
    quotation: "An apple a day...terrifies me."
  },
  {
    id: 2,
    name: "Book",
    age: 23,
    email: "book@gmail.com",
    color: "parchment",
    favefood: "thoughts",
    quotation: "You may judge me by my cover."
  },
  {
    id: 3,
    name: "Carbon",
    age: 68,
    email: "carbon@gmail.com",
    color: "dark grey",
    favefood: "everything",
    quotation:
      "No one ever heard of carbon poisoning. Not _just_ carbon anyway..."
  },
  {
    id: 4,
    name: "Diligence",
    age: 39,
    email: "diligence@gmail.com",
    color: "navy",
    favefood: "perseverence",
    quotation:
      "Genius is 1% inspiration and 99% me. Think about that for a minute. Now get back to work."
  },
  {
    id: 5,
    name: "Estuary",
    age: 47,
    email: "estuary@gmail.com",
    color: "tan",
    favefood: "silt",
    quotation: "Grahhbbllllhleh..."
  },
  {
    id: 6,
    name: "Thurday",
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
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put("/friends/:id", (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete("/friends/:id", (req, res) => {
  friends = friends.filter(friend => friend.id != req.params.id);
  res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
