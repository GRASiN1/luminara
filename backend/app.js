// imports
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const connection = require('./utils/connection');
const { authenticateUser } = require('./middleware/authentication');

//function calls
connection(process.env.MONGO_URI);
// variable 
const app = express();
const PORT = process.env.PORT;

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//routes
app.get('/', (req, res) => {
    res.send('API is working');
})
app.use('/api/user', userRouter);
app.use('/api/product', authenticateUser, productRouter);



app.listen(PORT, () => {
    console.log(`Server listening at port : ${PORT}`)
})