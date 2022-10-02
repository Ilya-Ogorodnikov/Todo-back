require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const apiRoutes = require('./src/modules/routes/tasks.routes');

app.use(cors({
  'Access-Control-Allow-Origin': '*'
}));
app.use(express.json());
app.use("/", apiRoutes);

const init = () => {
  try {
    mongoose.connect(process.env.URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    
    app.listen(8080, () => {
      console.log('App listening on port 8080');
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

init();