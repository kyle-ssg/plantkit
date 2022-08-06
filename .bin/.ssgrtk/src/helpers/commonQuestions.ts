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
export default async function(isPlural:boolean, hasId: boolean) {
  const entity = await inquirer.prompt(
    {
      name:"entity",
      type: "input",
      message: isPlural? `What is collection name? (e.g todos -> getTodos)`:  `What is entity name? (e.g thing -> createThing)`,
      default: "thing"
    }
  )
  const plural = pluralise(entity.entity)
  const extraUrl = hasId?"/:id":""
  const url = await inquirer.prompt(
    {
      name:"url",
      type: "input",
      message: `What is the url? (type y for /${plural}${extraUrl})`,
      default: `/${isPlural?pluralise(entity.entity):entity.entity}${extraUrl}`
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
  const resUrl = keywordFor(url.url, 'y',`/${plural}${extraUrl}`, )
  return {
    entity: isPlural?pluralise(`${entity.entity}`, 2):entity.entity,
    url: resUrl,
    urlWithoutId:`${resUrl.replace("/:id","")}`,
    gitAdd: gitAdd.add === "Yes",
  }
}
