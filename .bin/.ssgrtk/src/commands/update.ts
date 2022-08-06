import { Command } from "@oclif/core";
import commonQuestions from "../helpers/commonQuestions";
import add from "../helpers/gitAdd";
import { writeRequestTypes, writeUpdateQuery } from "../writer";
import lint from "../helpers/lint";

export const update = async ()=> {
  const actionType = "update";
  const {gitAdd,entity,url} = await commonQuestions( false, true)
  await writeRequestTypes(actionType,entity)
  await writeUpdateQuery(entity, url, true, true)
  if (gitAdd) {
    add()
  }
}
export default class Index extends Command {
  async run(): Promise<void> {
    await update()
    lint()
  }
}
Index.description = "RTK Service: Update a thing with an api"
