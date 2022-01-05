import FS from "fs";
import Path from "path";

import { default as Subprocess } from "./subprocess.js";

const File = import.meta.url.replace("file" + ":" + "//", "");
const CWD = Path.dirname(File);
const PKG = Path.dirname(CWD);

Subprocess("npm install --production .", PKG);
