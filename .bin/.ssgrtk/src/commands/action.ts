import { Command } from "@oclif/core";
import commonQuestions from "../helpers/commonQuestions";
import add from "../helpers/gitAdd";
import { writeAction, writeCollectionQuery, writeRequestTypes } from "../writer";
import lint from "../helpers/lint";
import actionQuestions from "../helpers/actionQuestions";

export const collection = async ()=> {
  const {prefix,entity,gitAdd} = await actionQuestions()
  await writeRequestTypes(prefix,entity)
  await writeAction(prefix,entity)
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

Index.description = "Reducer Slice: Dispatch an action that stores global state"
