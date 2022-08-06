import { Command } from "@oclif/core";
import commonQuestions from "../helpers/commonQuestions";
import add from "../helpers/gitAdd";
import { writeDeleteQuery, writeRequestTypes } from "../writer";
import lint from "../helpers/lint";

export const deleteFunc = async ()=> {
  const actionType = "delete";
  const {gitAdd,entity,url} = await commonQuestions( false, true)
  await writeRequestTypes(actionType,entity)
  await writeDeleteQuery(entity, url, true)
  if (gitAdd) {
    add()
  }
}
export default class Index extends Command {
  async run(): Promise<void> {
    await deleteFunc()
    lint()
  }
}
Index.description = "RTK Service: Delete a thing with an api"
