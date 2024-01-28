"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCardsToMongo = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongodb_1 = require("mongodb");
const creds_1 = require("./private/creds");
const app = (0, express_1.default)();
const PORT = 3000;
const uri = creds_1.MONGO_DB_URI;
const mongoClient = new mongodb_1.MongoClient(uri);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/submitCard", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cardData = req.body;
    try {
        yield mongoClient.connect();
        const db = mongoClient.db("mtg_maker");
        const coll = db.collection("cards");
        const result = yield coll.insertOne(cardData);
        res
            .status(200)
            .json({
            message: `Card created succesfully with id: ${result.insertedId}`,
        });
    }
    catch (e) {
        res
            .status(500)
            .json({ message: `Error: Unable to post data into MongoDB ${e}` });
    }
    finally {
        yield mongoClient.close();
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
function addCardsToMongo(card) {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.addCardsToMongo = addCardsToMongo;
app.get("/getCardByName/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoClient.connect();
        const db = mongoClient.db("mtg_maker");
        const collection = db.collection("cards");
        const card = yield collection.findOne({ cardName: req.params.name });
        if (card) {
            res.json(card);
        }
        else {
            res.status(404).json({ message: "Card not found" });
        }
    }
    catch (e) {
        res
            .status(500)
            .json({ message: `Error: Unable to retrieve from Mongo ${e}` });
    }
    finally {
        yield mongoClient.close();
    }
}));
app.get("/getAllCards", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoClient.connect();
        const db = mongoClient.db("mtg_maker");
        const collection = db.collection("cards");
        const allCards = yield collection.find({}).toArray();
        if (allCards) {
            res.json(allCards);
        }
        else {
            res.status(408).json({ message: "Error in your query" });
        }
    }
    catch (e) {
        res
            .status(500)
            .json({ message: `Error: Unable to retrieve from Mongo ${e}` });
    }
    finally {
        yield mongoClient.close();
    }
}));
//# sourceMappingURL=server.js.map