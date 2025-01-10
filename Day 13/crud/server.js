const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

const port = process.env.port || 4000;

mongoose
  .connect("mongodb://127.0.0.1:27017/atharvvvv")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    confirm.log("err");
  });

const thingsSchema = mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
});

const Things = mongoose.model("Things", thingsSchema);
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const things = await Things.find();
    res.status(200).json({ message: things });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.post("/add", async (req, res) => {
  const { name, description } = req.body;
  try {
    const things = Things({ name, description });
    await things.save();
    res.status(201).json("Your things is created successfully");
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const things = await Things.findByIdAndUpdate(id, { name, description });
    res.status(201).json("Your things is Updated successfully");
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const things = await Things.findByIdAndDelete(id, { name, description });
    res.status(201).json("Your things is Deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`We are listening ${port}`);
});
