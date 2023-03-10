const mongoose = require("mongoose");
const schema = mongoose.Schema;
 
const User = new schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    }
});
 
module.exports = mongoose.model("Users", User)