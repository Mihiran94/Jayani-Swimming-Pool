import mongoose from "mongoose";
const Schema = mongoose.Schema;

let itemSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },

  name: {
    type: String,
    match: /^[a-zA-Z ]{2,30}$/,
    required: [true, 'item name is required...!']
  },
  code: {
    type: String,
    match: /^[ 0-9]/,
    // match: /^[a-zA-Z ]{2,30}$/,
    required: [true, 'item code is required...!']
  },

  price: {
    type: String,
    required: [true, 'item price is required...!']
  },

  date: {
    type: Date,
    default: Date.now
  }

  // codes:{
  //   type:String,
  //   required: [true, 'item code is required...!']
  // }

});

export default mongoose.model('Items', itemSchema);