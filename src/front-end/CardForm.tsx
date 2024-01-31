import React, { useState } from "react";

function CardForm() {
  const [cardData, setCardData] = useState({
    cardName: "",
    description: "",
    strength: "",
    toughness: "",
    manaCost: "",
    manaType: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData),
      });

      // Handle response
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
      } else {
        console.error("Error creating card.");
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label>
          Card Name: 
          <input
            type="text"
            name="cardName"
            value={cardData.cardName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <label>
          Description: 
          <input
            type="text"
            name="description"
            value={cardData.description}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <label>
          Strength: 
          <input
            type="text"
            name="strength"
            value={cardData.strength}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <label>
          Toughness: 
          <input
            type="text"
            name="toughness"
            value={cardData.toughness}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <label>
          Mana Cost: 
          <input
            type="text"
            name="manaCost"
            value={cardData.manaCost}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <label>
          Mana Type: 
          <input
            type="text"
            name="manaType"
            value={cardData.manaType}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="submitButton" type="submit">
        Create Card
      </button>
      </div>
    </form>
  );
}

export default CardForm;
