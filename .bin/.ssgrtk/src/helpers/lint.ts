import { execSync } from "child_process";
import { findRootPath } from "./findRootPath";

export default function() {
  let rootPath = findRootPath();
  execSync(`cd ${rootPath} && npm run lint:fix`);
}
