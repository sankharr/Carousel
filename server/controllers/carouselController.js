const Slide = require("../model/Slide");

// route to get all patients
const getSlides =  async (req, res) => {
    const id = req.params.id;
    let device;
    try {
        device = await Device.findById(id);
    }
    catch (err) {
        console.log(err);
    }

    if(!device) {
        return res.status(400).json({ message: "No device found!"})
    }
    return res.status(200).json({device});
};

exports.getSlides = getSlides;