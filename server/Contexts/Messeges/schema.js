import { Schema, model } from 'mongoose'

​const messageSchema = new Schema(
  {

   senderId: String,
    reciverId: String,
    senderName:String,
    message:String
},
  { timestamps: { createdAt: true, updatedAt: true } }
)
​
const MessageModel = model('message', messageSchema)
​
export default MessageModel
