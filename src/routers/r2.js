import express from "express";

let router = express.Router();

router.get("/", (req, resp) => {
    resp.send("r2 homepage");
});

router.get("/:id(\\d+)", (req, resp) => {
    resp.send(`r2 query by id: ${req.params.id}`);
});

export default router;