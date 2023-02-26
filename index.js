const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UserRoute = require("./routes/UserRoutes.js");
 
const app = express();
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

// middleware------------------>
app.use(
    cors({
      origin: "*",
    })
  );
app.use(express.json());
app.use(UserRoute);
 
app.listen(process.env.PORT || 3001);