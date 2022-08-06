import { Command } from "@oclif/core";
import commonQuestions from "../helpers/commonQuestions";
import add from "../helpers/gitAdd";
import { writePatchQuery, writeRequestTypes } from "../writer";
import lint from "../helpers/lint";

export const patch = async ()=> {
  const actionType = "patch";
  const {gitAdd,entity,url} = await commonQuestions( false, true)
  await writeRequestTypes(actionType,entity)
  await writePatchQuery(entity, url, true, true)
  if (gitAdd) {
    add()
  }
}
export default class Index extends Command {
  async run(): Promise<void> {
    await patch()
    lint()
  }
}
Index.description = "RTK Service: Patch a thing with an api"
