import { model, Schema } from "mongoose";


const ProdyctSchema = new Schema({
    name: String,
    amount: Number,
    price: Number
})

const ProdyctModel = model('Product', ProdyctSchema)

export default ProdyctModel