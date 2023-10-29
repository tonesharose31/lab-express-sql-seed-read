// DEPENDENCIES
const app = require("./app");

// CONFIGURATIOn

const dotenv = require('dotenv');
dotenv.config();

// LISTEN
require("dotenv").config();


const PORT = process.env.PORT || 8008;
app.listen(PORT, () => {
    console.log(`Bookmarks live on port: ${PORT}`)
})
