import express from "express";
import { createRoom, updateRoom, deleteRoom, getRoom, getRooms } from "../controllers/roomController.js";
import {verifyAdmin} from "../utils/verifyToken.js"; 

const router = express.Router();

//create
router.post("/:hotelid", verifyAdmin, createRoom);

//update
router.put("/:id",verifyAdmin, updateRoom);

//delete
router.delete("/:id/:hotelid", deleteRoom);

//get
router.get("/:id", getRoom);

//get all
router.get("/:id", getRooms);


export default router;