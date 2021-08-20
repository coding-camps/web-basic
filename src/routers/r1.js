import express from "express";

let router = express.Router();

router.get("/", (req, resp) => {
    resp.send("r1 homepage");
});

router.get("/:id", (req, resp) => {
    resp.send(`r1 query by id: ${req.params.id}`);
});

export default router;