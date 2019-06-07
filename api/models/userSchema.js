import mongoose from "mongoose";
const Schema = mongoose.Schema;
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')
let userSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },

  name: {
    type: String,
    match: /^[a-zA-Z ]{2,30}$/,
    required: [true, 'name is required...!']
  },

  email: {
    type: String,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    unique: true,
    lowercase: true,
    required: [true, 'email is required...!']
  },

  username: {
    type: String,
    match: /^[a-zA-Z0-9]+$/,
    unique: true,
    required: [true, 'username is required...!']
  },

  password: {
    type: String,
    required: [true, 'password is required...!']
  },
  role:{
    default:"customer",
    type: String,
  },
  salt:{
type:String
  },

  date: {
    type: Date,
    default: Date.now
  }

});

userSchema.pre('save', function (next) {
  bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(this.password, salt, (err, hash) => {
          this.password = hash;
          this.salt = salt;
          next();
      });
  });
});
userSchema.methods.verifyPassword = function(password)
{
  return bcrypt.compareSync(password,this.Password);
}
userSchema.methods.generateJwt = function () {
  return jwt.sign({
      _id: this._id,  
      role:this.role     
  }, process.env.JWT_SECRET,
  {
       expiresIn: process.env.JWT_EXP
  });

}
export default mongoose.model('Users', userSchema);