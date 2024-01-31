import React, { useState } from "react";

function CardForm() {
    const [cardData, setCardData]  = useState({
        cardName: '',
        description: '',
        strength: '',
        toughness: '',
        manaCost: '',
        manaType: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setCardData({...cardData, [name]: value});
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/submitCard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardData),
    });

        // Handle response
        if (response.ok) {
            console.log('Card created successfully!');
            setCardData({
                cardName: '',
                description: '',
                strength: '',
                toughness: '',
                manaCost: '',
                manaType: '',
            });
        } else {
            console.error('Error creating card.');
        }
    } catch (e) {
        console.error('Error:', e);
    }

        
    };

    return (
        <form onSubmit={handleSubmit}>
      <label>
        Card Name:
        <input type="text" name="cardName" value={cardData.cardName} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={cardData.description} onChange={handleChange} />
      </label>
      <label>
        Strength:
        <input type="text" name="strength" value={cardData.strength} onChange={handleChange} />
      </label>
      <label>
        Toughness:
        <input type="text" name="toughness" value={cardData.toughness} onChange={handleChange} />
      </label>
      <label>
        Mana Cost:
        <input type="text" name="manaCost" value={cardData.manaCost} onChange={handleChange} />
      </label>
      <label>
        Mana Type:
        <input type="text" name="manaType" value={cardData.manaType} onChange={handleChange} />
      </label>
      <button type="submit">Create Card</button>
    </form>
    );
}

export default CardForm;