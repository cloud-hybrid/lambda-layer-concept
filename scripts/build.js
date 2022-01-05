import FS from "fs";
import Path from "path";
import Utility from "util";

import { default as Copy, Layer } from "./copy.js";
import { default as Subprocess } from "./subprocess.js";

const File = import.meta.url.replace("file" + ":" + "//", "");
const CWD = Path.dirname(File);
const PKG = Path.dirname(CWD);

const Remove = Utility.promisify(FS.rm);

await Remove(Path.join(PKG, "artifacts"), { recursive: true, force: true });
await Remove(Path.join(PKG, "node_modules"), { recursive: true, force: true });

FS.mkdirSync(Path.join(PKG, "artifacts"), { recursive: true });
FS.mkdirSync(Path.join(PKG, "artifacts", "nodejs"), { recursive: true });

Subprocess("npm install --production .", PKG);

/// Copy Layer Dependencies
Copy(Path.join(PKG, "node_modules"), Path.join(PKG, "artifacts", "nodejs", "node_modules"));
await Remove(Path.join(PKG, "node_modules"), {recursive: true, force: true});

/// Copy the Layer File(s), Shallow (Node-JS Directory)
Layer(Path.join(PKG), Path.join(PKG, "artifacts", "nodejs"));

/// Establish Self-Referencing Symbolic Link
Subprocess("npm install --production .", Path.join(PKG, "artifacts", "nodejs"));