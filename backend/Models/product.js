const mongoose = require("mongoose");
const Joi = require('joi');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        minlength: [2, 'Product name must be at least 2 characters'],
        maxlength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },
    category: {
        type: String,
        required: [true, 'Category is required']
    },
    stock: {
        type: Number,
        required: [true, 'Stock is required'],
        min: [0, 'Stock cannot be negative']
    },
    description: {
        type: String,
        maxlength: [1000, 'Description cannot exceed 1000 characters']
    },
    // Image: {
    //     type: String,
    //     required: [true, 'Image is required']
    // }
});

const validateProduct = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        price: Joi.number().min(0).required(),
        category: Joi.string().required(),
        stock: Joi.number().min(0).required(),
        description: Joi.string().max(1000).optional(),
        // Image: Joi.string().required()
    });

    return schema.validate(data);
};

module.exports = {
    productModel: mongoose.model("Product", productSchema),
    validateProduct
};