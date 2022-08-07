import fs from "fs";
import path from "path";

export function findRootPath() {
  let rootPath = path.join(process.cwd(), '../../../../')
  if(!fs.existsSync(path.join(rootPath, './common/store.ts'))) {
    rootPath = path.join(process.cwd(), '../../../')
    if(!fs.existsSync(path.join(rootPath, './common/store.ts'))) {
      rootPath = path.join(process.cwd(), '../../')
      if(!fs.existsSync(path.join(rootPath, './common/store.ts'))) {
        rootPath = path.join(process.cwd(), '../')
        if(!fs.existsSync(path.join(rootPath, './common/store.ts'))) {
          rootPath = path.join(process.cwd(), './')
          if(!fs.existsSync(path.join(rootPath, './common/store.ts'))) {
            console.log("Could not find common/store.ts, are you in a project?")
            process.exit(1)
          }
        }
      }
    }
  }
  console.log("Running CLI at", rootPath)
  return rootPath
}
