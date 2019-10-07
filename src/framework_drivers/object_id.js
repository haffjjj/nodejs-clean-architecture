import mongoose from "mongoose"

const isObjectId = mongoose.Types.ObjectId.isValid
const ObjectId = mongoose.Types.ObjectId

export {
  isObjectId,
  ObjectId
}