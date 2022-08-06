const { execSync } = require("child_process");
const ref = process.env.CI_COMMIT_REF_NAME && process.env.CI_COMMIT_REF_NAME.split("/")

let version;
if (!ref || ref.length!==3 || !process.env.CI_COMMIT_REF_NAME.startsWith("mobile/")) {
  console.log("Branch is not versioned, skipping set native version")
  version = require('../package.json').version
} else {
  version = ref[ref.length-1]
}
console.log("Setting native version  " + version)
execSync("npx set-version " + version)
