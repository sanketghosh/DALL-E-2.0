import express from "express";
import {
  createPostHandler,
  getAllPostsHandler,
} from "../controllers/post.controller.js";
const router = express.Router();

router.route("/").get(getAllPostsHandler);
router.route("/").post(createPostHandler);

export default router;
