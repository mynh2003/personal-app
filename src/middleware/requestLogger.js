import morgan from "morgan";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "../../logs/access.log"),
  { flags: "a" },
);

const requestLogger = morgan("combined", {
  stream: accessLogStream,
});

export default requestLogger;
