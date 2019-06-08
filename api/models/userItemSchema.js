import mongoose from "mongoose";
const Schema = mongoose.Schema;

let userItemSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },

  name: {
    type: String,
    match: /^[a-zA-Z ]{2,30}$/,
    required: [true, 'item name is required...!']
  },
  

  price: {
    type: String,
    required: [true, 'item price is required...!']
  },

  cname: {
    type: String,
    required: [true, 'country is required...']
  },
  address: {
    type: String,
    required: [true, 'credit card number is required...']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'contact info is required...']
  },
  tel: {
    type: String,
    required: [true, 'credit card number is required...']
  },

  date: {
    type: Date,
    default: Date.now
  },

  // codes:{
  //   type: String,
  //   required: [true, 'item code is required...!']
  // },



  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }
});

export default mongoose.model('User_Items', userItemSchema);