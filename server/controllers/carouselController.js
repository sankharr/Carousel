const Slide = require("../model/Slide");
const fs = require("fs");
const request = require("request");
const saveLocation = "./savedFiles/image";
const data = require("../data");

// function which will download the files from the url
const download = (url, path, callback) => {
    request.head(url, () => {
      request(url).pipe(fs.createWriteStream(path)).on("close", callback);
    });
};

// get all slide data
const getSlideData = (req, res) => {
  let slides = req.query.slides;

  try {
    return res.status(200).json(data.slice(0, slides));
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "An error occured!" });
  }
};

// save images in server and other data in mongoDB
const saveData = (req, res) => {
  let dataObject;
  try {
    data.forEach((item, index) => {
      download(item.image, saveLocation + String(index) + ".png", () => {
        dataObject = new Slide({
          image: item.image,
          title: item.title,
          subTitle: item.subTitle,
        });
        dataObject.save((err, result) => {
          if (err) console.log("error occured when saving the doc - ", err);
        });
      });
    });
    return res.status(200).json({ message: "Files Downloaded" });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "An error occured!" });
  }
};

exports.getSlideData = getSlideData;
exports.saveData = saveData;
