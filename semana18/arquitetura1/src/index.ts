import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import UserController from "./controller/UserController";

dotenv.config()
const app = express();
app.use(express.json());

app.put("/signup", new UserController().signup)
app.post("/login", new UserController().login)

const server = app.listen(3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
