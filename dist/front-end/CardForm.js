"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function CardForm() {
    const [cardData, setCardData] = (0, react_1.useState)({
        cardName: "",
        description: "",
        strength: "",
        toughness: "",
        manaCost: "",
        manaType: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCardData(Object.assign(Object.assign({}, cardData), { [name]: value }));
    };
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        try {
            const response = yield fetch("http://localhost:3000/cards", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cardData),
            });
            if (response.ok) {
                console.log("Card created successfully!");
                setCardData({
                    cardName: "",
                    description: "",
                    strength: "",
                    toughness: "",
                    manaCost: "",
                    manaType: "",
                });
            }
            else {
                console.error("Error creating card.");
            }
        }
        catch (e) {
            console.error("Error:", e);
        }
    });
    return (react_1.default.createElement("form", { onSubmit: handleSubmit },
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("label", null,
                "Card Name:",
                react_1.default.createElement("input", { type: "text", name: "cardName", value: cardData.cardName, onChange: handleChange }))),
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("label", null,
                "Description:",
                react_1.default.createElement("input", { type: "text", name: "description", value: cardData.description, onChange: handleChange }))),
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("label", null,
                "Strength:",
                react_1.default.createElement("input", { type: "text", name: "strength", value: cardData.strength, onChange: handleChange }))),
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("label", null,
                "Toughness:",
                react_1.default.createElement("input", { type: "text", name: "toughness", value: cardData.toughness, onChange: handleChange }))),
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("label", null,
                "Mana Cost:",
                react_1.default.createElement("input", { type: "text", name: "manaCost", value: cardData.manaCost, onChange: handleChange }))),
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("label", null,
                "Mana Type:",
                react_1.default.createElement("input", { type: "text", name: "manaType", value: cardData.manaType, onChange: handleChange })),
            react_1.default.createElement("br", null),
            react_1.default.createElement("button", { className: "submitButton", type: "submit" }, "Create Card"))));
}
exports.default = CardForm;
//# sourceMappingURL=CardForm.js.map