import express from "express";
import { create, deleteUser, getAll, getOne, update } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllUser", getAll);
route.get("/getUser/:id", getOne);
route.put("/updateUser/:id", update);
route.delete("/deleteUser/:id", deleteUser);

export default route;