const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const carSchema = new Schema({
    number:{type: Number, required: true},
    maker:{ type: String, required: true},
    name:{ type: String , required: true},
    image:{ type: String, required: true},
    size:{ type: Number, required: true},
    year:{ type: String, required: true},
    price: { type: Number, required: true},
    kms:{ type: String, required: true},
    rent:[{type: String, required: true}],
 
},{
    
    timestamps: true,
});

 const Car = mongoose.model('Cars',carSchema);

 module.exports = Car;