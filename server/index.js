const express = require("express");
const bodyParser = require('body-parser');
const data = require("./data");
const PORT = 3600;

const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/carousel', (req, res) => {
    try{
        return res.status(200).json(data);
    }
    catch (error){
        console.log(error);
        return res.status(404).json({ message: "An error occured!"})
    }
});

app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT}`);
})