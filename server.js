import express from "express";

const app = express();

const PORT = 5000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('<h1> WELCOME TO HRESS </h1>')
})

app.listen(PORT, () => {
  console.log(`Server @ http://localhost:${PORT}`)
})
