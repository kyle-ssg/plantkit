import { Command } from "@oclif/core";
import commonQuestions from "../helpers/commonQuestions";
import add from "../helpers/gitAdd";
import { writeGetQuery, writeRequestTypes } from "../writer";
import lint from "../helpers/lint";

export const get = async ()=> {
  const actionType = "get";
  const {gitAdd,entity,url} = await commonQuestions( false,true)
  await writeRequestTypes(actionType,entity)
  await writeGetQuery(entity, url, true)
  if (gitAdd) {
    add()
  }
}
export default class Index extends Command {
  async run(): Promise<void> {
    await get()
    lint()
  }
}
Index.description = "RTK Service: Get a thing with an api"
