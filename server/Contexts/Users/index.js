import UserDao from "./dao";

export class UserService {
  constructor() {
    this.userDao = new UserDao();
  }

  async findOrCreateUser(userDetails) {
    const { email } = userDetails;
    let user = await this.userDao.findOneBy({ email });
    if (user) {
      user.previouslyExisted = true;
      return user;
    }
    user = await this.userDao.create(userDetails);
    return user;
  }

  async findById(_id, projection) {
    const user = await this.userDao.findById(_id, projection);
    return user;
  }
  async findOneAndUpdate(query, set) {
    return this.userDao.findOneAndUpdate(query, set);
  }
  async findAll(query, projection) {
    return this.userDao.findAll(query, projection);
  }
  async showEmail(email) {
    return this.userDao.findOneBy(email);
  }
}

const userService = new UserService();

export default {
  findOrCreateUser: userDetails => userService.findOrCreateUser(userDetails),
  findById: (id, projection) => userService.findById(id, projection),
  findOneAndUpdate: (query, set) => userService.findOneAndUpdate(query, set),
  findAll: (query, projection) => userService.findAll(query, projection),
  showEmail: email => userService.showEmail(email)
};
