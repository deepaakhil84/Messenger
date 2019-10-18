import Dao from "../../DB/dao";
import messages from "./schema";
export default class messagesDao extends Dao {
  constructor() {
    super(messages);
  }
  async create(messageDetails) {
    const message = new messages(messageDetails);
    return message.save();
  }
}
