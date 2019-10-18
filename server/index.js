import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import compression from "compression";
import jwt from "jsonwebtoken";
import connectToDb from "./DB/index";
import UserContext from "./Contexts/Users";
import MessageContext from "./Contexts/Messeges";

connectToDb();
dotenv.config();

function startAPI() {
  const app = express()
    .use(cors())
    .use(express.json({ limit: "50mb", parameterLimit: 50000 }))
    .use(compression());

  app.post("/message", async (req, res) => {
    try {
      const message = await MessageContext.findOrCreateMessage(req.body);

      return res.status(200).json({ message });
    } catch (error) {
      console.log({ ...error });
      return res.status(400).json({ error: "could not send message" });
    }
  });

  app.post("/user", async (req, res) => {
    try {
      const user = await UserContext.findOrCreateUser(req.body);
      return res.status(200).json({ user });
    } catch (error) {
      console.log({ ...error });
      return res.status(400).json({ error: "could not  create user" });
    }
  });

  app.post("/login", async (req, res) => {
    const userLoginDetails = req.body;
    try {
      const user = await UserContext.showEmail({
        email: userLoginDetails.email
      });
      if (user) {
        //to do create token out of LookupUser[0]
        if (userLoginDetails.password === user.password) {
          jwt.sign(user, "secretkey", (err, token) => {
            if (err) {
              return res.status(401).send("invalid token...");
            }
            return res.status(200).json({ token });
          });
        } else {
          throw new Error("wrong password");
        }
      } else {
        throw new Error("no user");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "username and password is wrong" });
    }
  });

  // To update a user

  app.put("/user/:_id", async (req, res) => {
    const userData = req.body;

    console.log(userData);
    const { _id } = req.params;
    try {
      const userData = await UserContext.findById(userData);
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
    } catch (error) {
      users = newUsers;
      return res.status(200).json("sucess");
    }
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
    try {
      const users = await UserContext.findAll();
      console.log(users);
      return res.status(200).json({users});
    } catch (error) {
      console.log("error");
    }
  });
  const server = app.listen(3001, () =>
    console.log(`Listening on http://localhost:${server.address().port}`)
  );
  return app;
}
startAPI();
