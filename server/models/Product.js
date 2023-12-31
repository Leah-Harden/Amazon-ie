const { Schema, model } = require('mongoose');



const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },

}
);


const Product = model('Product', productSchema);

module.exports = Product;
