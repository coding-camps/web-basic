import express from "express";
import app from "../common/app.js";

let router = express.Router();

router.get("/", (req, resp) => {
    resp.send("r2 homepage");
});

router.get("/:id", (req, resp) => {
    resp.send(`r2 query by id: ${req.params.id}`);
});

export default router;