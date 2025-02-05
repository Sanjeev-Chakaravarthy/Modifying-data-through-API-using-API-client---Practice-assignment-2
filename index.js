const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const menuRoutes = require('./routes/menuRoutes');

dotenv.config();


const app = express();
const port = 3010;


app.use(express.json());


connectDB();



app.use('/menu', menuRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
