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
  const prefix = await inquirer.prompt(
    {
      name:"prefix",
      type: "input",
      message: `What is the action prefix? (e.g set -> setThing)`,
      default: "set"
    }
  )

  const entity = await inquirer.prompt(
    {
      name:"entity",
      type: "input",
      message: `What is entity name? (e.g thing -> ${prefix.prefix.toLowerCase()}Thing)`,
      default: "thing"
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
    gitAdd: gitAdd.add,
    entity: entity.entity,
    prefix:prefix.prefix.toLowerCase()
  }
}
