import express from "express";

const app = express();

const port = 3000;

// Jokes Data --

const jokes = [
  {
    category: "Christmas",
    setup: "What says Oh Oh Oh?",
    delivery: "Santa walking backwards!",
    id: 245,
  },
  {
    category: "Pun",
    setup: "Why should you never talk to pi?",
    delivery: "Because it will go on forever.",
    id: 318,
  },
  {
    category: "Programming",
    setup: "Hey, wanna hear a joke?",
    delivery: "Parsing HTML with regex.",
    id: 10,
  },
  {
    category: "Programming",
    setup: "Why do Java programmers hate communism?",
    delivery: "They don't want to live in a classless society.",
    id: 53,
  },
  {
    category: "Pun",
    type: "twopart",
    setup:
      "To prove he was right, the flat-earther walked to the end of the Earth.",
    delivery: "He eventually came around.",
    id: 280,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Express Is Working</h1>");
});

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Express App Is Listenning On : ${port}`);
});
