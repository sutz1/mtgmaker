# MTG Maker - Custom Magic The Gathering Card Creator (POC)
### What is MTG Maker?
MTG Maker is a proof of concept (POC) for learning purposes. It was developed by Samuel Utz in preparation for Full Stack job interviews. MTG Maker is intended to allow users to generate their own [Magic The Gathering](https://cards.scryfall.io/large/front/3/a/3a3df8ed-ff36-478e-a4f4-bee041b77d15.jpg?1675829285) cards. 

The service contains three components:
* A static webpage where the user is prompted to enter card details and a `Generate` button.
* An Express REST API that handles card creation and retrieval
* A MongoDB Database and Card catalogue. This database is utilized to store and retrieve card information for users. The data is acquired on each generation, and retrieval will be handled in an upcoming card-generation feature for the front end. Data is transferred via the Express API

### Future plans/TODO for this Project
* Add unit/integration tests to confirm valid data can be submitted and retrieved from the DB.
* Credential retrieval to allow the DB to be accessed without publicly posting the URI
* Front-end component showing the generated Card. This will likely be added using [CanvasAPI](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
* Authentication piece utilizing OAuth.
