import { Command } from "@oclif/core";
import commonQuestions from "../helpers/commonQuestions";
import add from "../helpers/gitAdd";
import { writeCollectionQuery, writeRequestTypes } from "../writer";
import lint from "../helpers/lint";

export const collection = async ()=> {
  const actionType = "get";
  const {gitAdd,entity,url} = await commonQuestions( true,false)
  await writeRequestTypes(actionType,entity,true)
  await writeCollectionQuery(entity, url, true)
  if (gitAdd) {
    add()
  }
}
export default class Index extends Command {
  async run(): Promise<void> {
    await collection()
    lint()
  }
}

Index.description = "RTK Service: Retrieve a collection of things from an api"
