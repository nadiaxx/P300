const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://nadia:nadia@p300.g2wyq1k.mongodb.net/?retryWrites=true&w=majority', 
{
	useNewUrlParser: true, 
	useUnifiedTopology: true 
})
.then(() => console.log("Connected to MongoDB"))
.catch(console.error);



