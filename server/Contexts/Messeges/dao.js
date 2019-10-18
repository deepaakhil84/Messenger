import Dao from "../../DB/dao"
import messages from './schema'
​
export default class messages extends Dao {
  constructor() {
    super(messages)
  }
​
  async create(userDetails) {
    const message = new messages(userDetails)
    return message.save()
  }
}