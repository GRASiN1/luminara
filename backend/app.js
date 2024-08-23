// imports
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const addressRouter = require('./routes/address');
const reviewRouter = require('./routes/review');
const orderRouter = require('./routes/order');
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
app.use('/api/address', authenticateUser, addressRouter);
app.use('/api/review', authenticateUser, reviewRouter);
app.use('/api/order', authenticateUser, orderRouter);

/*
Backend is done and running though i need to fix we are giving the reponse
also we will have to make some changes in way we are handling order as per future requirement
few more features need to be added in the order routes
*/

app.listen(PORT, () => {
    console.log(`Server listening at port : ${PORT}`)
})