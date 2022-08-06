import { Command } from "@oclif/core";
import commonQuestions from "../helpers/commonQuestions";
import add from "../helpers/gitAdd";
import { writeCreateQuery, writeRequestTypes } from "../writer";
import lint from "../helpers/lint";

export const create = async ()=> {
  const actionType = "create";
  const {gitAdd,entity,url} = await commonQuestions( false,false)
  await writeRequestTypes(actionType,entity)
  await writeCreateQuery(entity, url, true)
  if (gitAdd) {
    add()
  }
}
export default class Index extends Command {
  async run(): Promise<void> {
    await create()
    lint()
  }
}

Index.description = "RTK Service: Create a thing with an api"
