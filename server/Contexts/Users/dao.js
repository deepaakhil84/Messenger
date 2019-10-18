import Dao from "../../DB/dao";
import User from "./schema";

export default class UserDao extends Dao {
  constructor() {
    super(User);
  }

  async create(userDetails) {
    const user = new User(userDetails);
    return user.save();
  }
}
