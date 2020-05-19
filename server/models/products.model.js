const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	product:{
        type:String,
        required:[true,"Must provide a name for product"]
    },
    price: {
        type:Number,
        required:[true,"Product must have a price."],
    },
    decription: {
        type:String,
        required:[true,"Must provide description"],
        minlength:[10,"Must provide description longer then 10 characters"]
    }
});

const Joke = mongoose.model("product", ProductSchema);

module.exports = Joke;