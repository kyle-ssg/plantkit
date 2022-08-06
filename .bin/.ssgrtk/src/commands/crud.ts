import { Command } from "@oclif/core";
import commonQuestions from "../helpers/commonQuestions";
import add from "../helpers/gitAdd";
import { writeCreateQuery, writeDeleteQuery, writeGetQuery, writeRequestTypes, writeUpdateQuery } from "../writer";
import lint from "../helpers/lint";

export const collection = async ()=> {
  const actionType = "get";

  const {gitAdd,entity,url, urlWithoutId} = await commonQuestions( false,true)

  await writeRequestTypes("get",entity)
  await writeRequestTypes("update",entity)
  await writeRequestTypes("delete",entity)
  await writeRequestTypes("create",entity)
  await writeCreateQuery(entity, urlWithoutId, true)
  await writeDeleteQuery(entity, url, true)
  await writeGetQuery(entity, url, true)
  await writeUpdateQuery(entity, url, true,true)
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

Index.description = "RTK Service: Create,get,update and delete a thing with an api"
