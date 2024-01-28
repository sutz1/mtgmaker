const cardForm = document.getElementById('cardForm') as HTMLFormElement;

cardForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(cardForm);
    const cardData = Object.fromEntries(formData.entries());
    console.log(JSON.stringify(cardData));

    // Send data to the backend API
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
    } else {
        console.error('Error creating card.');
    }
});
