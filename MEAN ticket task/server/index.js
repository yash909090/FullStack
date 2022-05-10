import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import ticketRoutes from './routes/tickets.js';
import userRoutes from './routes/users.js'

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/tickets', ticketRoutes);
app.use('/user', userRoutes);

const CONNECTION_URL = 'mongodb+srv://newuser:newuser123@cluster0.gxwph.mongodb.net/MEAN12345myDB?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);  <----No longer necessary