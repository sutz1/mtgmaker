import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import { Card } from "./models/card";
import { MONGO_DB_URI } from "./private/creds";

const app = express();
const PORT = 3000;
const uri = MONGO_DB_URI;
const mongoClient = new MongoClient(uri);

app.use(cors());
app.use(express.json());

app.post("/submitCard", async (req, res) => {
  const cardData = req.body;
  try {
    await mongoClient.connect();
    const db = mongoClient.db("mtg_maker");
    const coll = db.collection("cards");

    const result = await coll.insertOne(cardData);
    res
      .status(200)
      .json({
        message: `Card created succesfully with id: ${result.insertedId}`,
      });
  } catch (e) {
    res
      .status(500)
      .json({ message: `Error: Unable to post data into MongoDB ${e}` });
  } finally {
    await mongoClient.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

export async function addCardsToMongo(card: Card) {}

app.get("/getCardByName/:name", async (req, res) => {
  try {
    await mongoClient.connect();

    const db = mongoClient.db("mtg_maker");
    const collection = db.collection("cards");

    const card = await collection.findOne({ cardName: req.params.name });

    if (card) {
      res.json(card);
    } else {
      res.status(404).json({ message: "Card not found" });
    }
  } catch (e) {
    res
      .status(500)
      .json({ message: `Error: Unable to retrieve from Mongo ${e}` });
  } finally {
    await mongoClient.close();
  }
});

app.get("/getAllCards", async (req, res) => {
  try {
    await mongoClient.connect();

    const db = mongoClient.db("mtg_maker");
    const collection = db.collection("cards");

    const allCards = await collection.find({}).toArray();

    if (allCards) {
      res.json(allCards);
    } else {
      res.status(408).json({ message: "Error in your query" });
    }
  } catch (e) {
    res
      .status(500)
      .json({ message: `Error: Unable to retrieve from Mongo ${e}` });
  } finally {
    await mongoClient.close();
  }
});
