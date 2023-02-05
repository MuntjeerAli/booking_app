import express from "express";
import { createHotel, getHotels, updateHotel, deleteHotel, getHotel } from "../controllers/hotelController.js";
import Hotel from "../models/Hotel.js";
import  {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);

//update
router.put("/:id",verifyAdmin, updateHotel);

//delete
router.delete("/:id", deleteHotel);

//get

router.get("/:id", getHotel);

//get all
router.get("/", getHotels);

export default router