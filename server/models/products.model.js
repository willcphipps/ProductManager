const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	product:{
        type:String,
        required:[true, "Must provide a name for product"]
    },
    price: {
        type:Number,
        required:[true, "Product must have a price."]
    },
    description: {
        type:String,
        required: [true, "Must provide description"]
    }
});

const Joke = mongoose.model("product", ProductSchema);

module.exports = Joke;