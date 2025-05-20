import { model, Schema } from "mongoose";

const PermisionSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    actions: [String],
    permisionName: String
})

const PermissionModel = model('Permision', PermisionSchema)

export default PermissionModel