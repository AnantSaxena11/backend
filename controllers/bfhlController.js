// controllers/bfhlController.js

const BFHLModel = require('../models/bfhlModel.js');

const USER_ID = "john_doe_17091999";
const EMAIL = "john@xyz.com";
const ROLL_NUMBER = "ABCD123";

exports.postBFHL = (req, res) => {
    const data = req.body.data || [];

    const { numbers, alphabets, highestLowercase } = BFHLModel.processData(data);

    res.json({
        is_success: true,
        user_id: USER_ID,
        email: EMAIL,
        roll_number: ROLL_NUMBER,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase
    });
};

exports.getBFHL = (req, res) => {
    res.json({
        operation_code: 1
    });
};
