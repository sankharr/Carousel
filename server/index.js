const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const PORT = 3600;
const path = require("path");
const carouselRouter = require("./routes/carousel-routes");

const cors = require("cors");
const app = express();
dotenv.config({ path: path.resolve(__dirname, "../.env") });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", carouselRouter);

// connecting to MongoDB
mongoose.connect(
  process.env.CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`Database is Connected`);
  }
);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
