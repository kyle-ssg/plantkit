import {Command} from "@oclif/core";
import add from "../helpers/gitAdd";
import {writeScreen} from "../writer";
import lint from "../helpers/lint";
import screenQuestions from "../helpers/screenQuestions";

export const collection = async ()=> {
  const {name,path,gitAdd} = await screenQuestions()
  await writeScreen(name,path);

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

Index.description = "Screen: creates a ReactNative Screen and Route"
