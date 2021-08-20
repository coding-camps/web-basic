import express from "express";

let router = express.Router();

router.get("/", (req, resp) => {
    resp.send("r1 homepage");
});

router.get("/:msg", (req, resp) => {
    resp.send(`r1 message: ${req.params.msg}`);
});

export default router;