// imports
const corsOptions = require('./config/cors');
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');

//function calls
dotenv.config();
// variable 
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//routes
app.get('/', (req, res) => {
    res.send('API is working');
})



app.listen(PORT, () => {
    console.log(`Server listening at port : ${PORT}`)
})