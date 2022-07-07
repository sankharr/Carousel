const express = require("express");
const bodyParser = require('body-parser');
const data = require("./data");
const PORT = 3600;
const url = require('url');

const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/carousel', (req, res) => {
    let slides = req.query.slides;

    console.log("req.params = ",slides)
    try{
        return res.status(200).json(data.slice(0,slides));
    }
    catch (error){
        console.log(error);
        return res.status(404).json({ message: "An error occured!"})
    }
});

// app.get('/api/carousel?', (req, res) => {
//     const queryObject = url.parse(req.url, true).query;
//     console.log(queryObject);
//     console.log("req.params = ",req.params)
//     try{
//         return res.status(200).json(data);
//     }
//     catch (error){
//         console.log(error);
//         return res.status(404).json({ message: "An error occured!"})
//     }
// });


app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT}`);
    
})