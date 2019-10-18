import MessageDao from "./dao";
export class MessageService {
  constructor() {
    this.MessageDao = new MessageDao();
  }
  async findOrCreateMessage(messageDetails) {
    const { email } = messageDetails;
    let message;
    message = await this.MessageDao.findOneBy({ email });
    if (message) {
      return message;
    }
    message = await this.MessageDao.create(messageDetails);
    return message;
  }
  async findById(_id, projection) {
    const message = await this.MessageDao.findById(_id, projection);
    return message;
  }
  async findOneAndUpdate(query, set) {
    return this.MessageDao.findOneAndUpdate(query, set);
  }
  async findAll(query, projection) {
    return this.MessageDao.findAll(query, projection);
  }
  async showEmail(email) {
    return this.MessageDao.findOneBy(email);
  }
}
const messageService = new MessageService();
export default {
  findOrCreateMessage: messageDetails =>
    messageService.findOrCreateMessage(messageDetails),
  findById: (id, projection) => messageService.findById(id, projection),
  findOneAndUpdate: (query, set) => messageService.findOneAndUpdate(query, set),
  findAll: (query, projection) => messageService.findAll(query, projection),
  showEmail: email => messageService.showEmail(email)
};
