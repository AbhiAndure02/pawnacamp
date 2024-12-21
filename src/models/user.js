// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email:{type: String},
    name: { type: String},
    mobile: { type: String},
    whatsapp: { type: Boolean },
    whatsappNumber: { type: String },
    numberOfChildren: { type: Number },
    numberOfAdults: { type: Number  },
    numberOfVeg: { type: Number},
    numberOfNonVeg: { type: Number},
    bookingDate: { type: Date},
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
