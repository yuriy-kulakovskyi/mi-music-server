const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const SongModel = require("./models/Music");

app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.MONGODB_URI, 
  {
    useNewUrlParser: true,
  }
);

app.post('/insert', async (req, res) => {
  
  const url = req.body.url;
  const name = req.body.name;

  const song = new SongModel({name: name, url: url});

  try{
    await song.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.get('/read', async (req, res) => {
  SongModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  })
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on the port 3001...");
})