import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import compression from "compression";
import jwt from "jsonwebtoken";

var messages = [
  {
    id: "1",
    senderId: "1",
    receiverId: "2",
    senderName: "Deepa",
    message: "Hello How are you"
  },
  {
    id: "2",
    senderId: "1",
    receiverId: "2",
    senderName: "Deepa",
    message: "Hello How are you"
  },
  {
    id: "3",
    senderId: "1",
    receiverId: "2",
    senderName: "Deepa",
    message: "Hello How are you"
  },
  {
    id: "4",
    senderId: "1",
    receiverId: "2",
    senderName: "Deepa",
    message: "Hello How are you"
  },
  {
    id: "5",
    senderId: "1",
    receiverId: "2",
    senderName: "Deepa",
    message: "Hello How are you"
  },
  {
    id: "6",
    senderId: "2",
    receiverId: "1",
    senderName: "Mosen",
    message: "Hello How are you"
  },
  {
    id: "7",
    senderId: "2",
    receiverId: "1",
    senderName: "Mosen",
    message: "Hello How are you"
  },
  {
    id: "8",
    senderId: "2",
    receiverId: "1",
    senderName: "Mosen",
    message: "Hello How are you"
  },

  {
    id: "9",
    senderId: "2",
    receiverId: "1",
    senderName: "Mosen",
    message: "Hello How are you"
  },
  {
    id: "10",
    senderId: "2",
    receiverId: "1",
    senderName: "Mosen",
    message: "Hello How are you"
  },
  {
    id: "11",
    senderId: "3",
    receiverId: "1",
    senderName: "Nima",
    message: "Hello How are you"
  },
  {
    id: "12",
    senderId: "3",
    receiverId: "1",
    senderName: "nima",
    message: "Hello How are you"
  }
];

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
    firstName: "mosen",
    lastName: "cyf",
    email: "devnaakhiluk@gmail.com",
    password: "12345"
  },
  {
    _id: "3",
    firstName: "nima",
    lastName: "cyf",
    email: "nima@gmail.com",
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
      //to do create token out of LookupUser[0]

      jwt.sign(LookupUser[0], "secretkey", (err, token) => {
        if (err) {
          return res.status(401).send("invalid token...");
        }
        return res.status(200).json({ token });
      });
    } else {
      return res.status(400).json({ error: "username and password is wrong" });
    }
  });
  // To update a user
  app.put("/user/:_id", async (req, res) => {
    const userData = req.body;
    console.log(userData);
    const { _id } = req.params;
    const newUsers = users.map(user => {
      if (_id === user._id) {
        return {
          _id: user._id,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          password: userData.password
        };
      }
      return user;
    });
    users = newUsers;
    return res.status(200).json("sucess");
  });

  app.get("/messages/:senderId/:receiverId", async (req, res) => {
    //to do get messages belong to two users sender, rsiver
    const { senderId, receiverId } = req.params;
    console.log(senderId, receiverId);
    const firstFilteredMsgs = messages.filter(
      message =>
        message.senderId === senderId && message.receiverId === receiverId
    );
    const secondFilteredMsgs = messages.filter(
      message =>
      message.receiverId === senderId && message.senderId === receiverId
      );
    return res
      .status(200)
      .json({ messages: [...firstFilteredMsgs, ...secondFilteredMsgs] }); //flat the result
  });

  app.get("/users", async (req, res) => {
    return res.status(200).json({ users });
  });
  const server = app.listen(3001, () =>
    console.log(`Listening on http://localhost:${server.address().port}`)
  );
  return app;
}
startAPI();
