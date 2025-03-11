const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        roomNumbers: [{  // ✅ Directly use array of objects
            number: Number,            
            unavailableDates: [Date],  // ✅ Fixed spelling
        }]
    });

module.exports = mongoose.model("Room", roomSchema);
