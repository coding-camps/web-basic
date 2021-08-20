import express from "express";

let router = express.Router();

let fun1 = function(req, resp, next) {
    console.log("r3-f1");
    next();
}

let fun2 = function(req, resp, next) {
    console.log("r3-f2");
    next();
}

let fun3 = function(req, resp) {
    console.log("r3-f3");
    resp.send("Hello from r3-3")
}

router.get("/", [fun1, fun2, fun3]);


export default router;