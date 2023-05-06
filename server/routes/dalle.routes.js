import express from "express";
import {
  getDallEResponseHandler,
  postToDallEHandler,
} from "../controllers/dalle.controller.js";
const router = express.Router();

router.route("/").get(getDallEResponseHandler);
router.route("/").post(postToDallEHandler);

export default router;
