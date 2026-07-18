import express from "express";
import dotenv, { config } from "dotenv";
dotenv.config({ path: "../../.env" });
const PORT = process.env["PORT"];
if (!PORT) {
    throw new Error("PORT environment variable is not set.");
}
const app = express();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map