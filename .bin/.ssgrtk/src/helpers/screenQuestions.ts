import inquirer from "inquirer";
import { plural as pluralise } from "./plural";
function camelCase(str:string) {
  return str.split(' ').map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join('');
}
const keywordFor = (res:string,keyword:string, value:string)=> {
  if (res.toLowerCase()===keyword) {
    return value
  }
  return res
}
export default async function() {
  const name = await inquirer.prompt(
    {
      name:"name",
      type: "input",
      message: `What is the screen Called?`,
      default: "TheScreen"
    }
  )
  const suggestion = name.name.split(/(?=[A-Z])/).join("-").toLowerCase().replace("-screen","")
  const path = await inquirer.prompt(
    {
      name:"path",
      type: "input",
      message: `What is the path?`,
      default: suggestion
    }
  )
  const gitAdd = await inquirer.prompt(
    {
      name:"add",
      type: "list",
      message: "Git add?",
      choices: ["Yes","No"]
    }
  )
  return {
    name: name.name,
    path: path.path,
    gitAdd:gitAdd.add === "Yes",
  }
}
