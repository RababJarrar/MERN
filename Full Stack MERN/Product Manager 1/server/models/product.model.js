const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    Title: { type: String },
    Price: { type: String },
    Description: { type: String }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);
