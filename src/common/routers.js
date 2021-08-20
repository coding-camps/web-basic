import app from "./app.js";

import r1 from "../routers/r1.js";
import r2 from "../routers/r2.js";
import r3 from "../routers/r3.js";
import r4 from "../routers/r4.js";

export default function() {
    app.use("/r1", r1);
    app.use("/r2", r2);
    app.use("/r3", r3);
    app.use("/r4", r4);
}
