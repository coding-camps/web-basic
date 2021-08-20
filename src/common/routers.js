import app from "./app.js";

import r1 from "../routers/r1.js";
import r2 from "../routers/r2.js";

export default function() {
    app.use("/r1", r1);
    app.use("/r2", r2);
}
