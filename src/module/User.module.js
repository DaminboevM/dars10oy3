import { model, Schema } from "mongoose";


const UserSchema = new Schema({
    name: String,
    age: Number,
    email: {type: String, unique: true},
    password: String,
    role: {type: String, default: 'User'}
})

const UserModel = model('User', UserSchema)

export default UserModel