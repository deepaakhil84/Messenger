import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import compression from "compression";
var messages = [];
var users = [
  {
    _id: "1",
    firstName: "deepa",
    lastName: "akhil",
    email: "deepaakhiltvm@gmail.com",
    password: "1234"
  },
  {
    _id: "2",
    firstName: "devna",
    lastName: "akhil",
    email: "devnaakhiluk@gmail.com",
    password: "12345"
  }
];

dotenv.config();

function startAPI() {
  const app = express()
    .use(cors())
    .use(express.json({ limit: "50mb", parameterLimit: 50000 }))
    .use(compression());

  app.post("/message", async (req, res) => {
    const message = req.body;
    message.id = messages.length + 1;
    console.log(message);
    messages.push(message);
    return res.status(200).json({ messages });
  });

  app.post("/user", async (req, res) => {
    const user = req.body;
    users.id = users.length + 1;
    users.push(user);
    return res.status(200).json({ user });
  });
  app.post("/login", async (req, res) => {
    const userLoginDetails = req.body;
    const LookupUser = users.filter(
      user =>
        user.email === userLoginDetails.email &&
        user.password === userLoginDetails.password
    );
    if (LookupUser.length > 0) {
      return res.status(200).json({ user: LookupUser[0] });
    } else {
      return res.status(400).json({ error: "username and password is wrong" });
    }
  });

  const server = app.listen(3001, () =>
    console.log(`Listening on http://localhost:${server.address().port}`)
  );
  return app;
}
startAPI();
