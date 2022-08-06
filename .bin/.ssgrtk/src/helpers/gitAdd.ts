import { execSync } from "child_process";

export default function() {
  execSync(`cd ${process.cwd()} && git add .`);
}
