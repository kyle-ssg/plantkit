require('dotenv').config();
const { WebClient } = require('@slack/web-api');

const SLACK_TOKEN = process.env.SLACK_TOKEN;

module.exports = function (path) {
  if (!SLACK_TOKEN) {
    console.log('Slack token not specified, skipping upload');
    return;
  }
  const name = require('../../package.json').name
  const title = 'Test Run ' + name; // Optional

  console.log(`Uploading ${path}`);
  const slackClient = new WebClient(process.env.SLACK_TOKEN);

  // Call the files.upload method using the WebClient
  return slackClient.files.upload({
    channels: process.env.SLACK_CHANNEL || "boilerplate-tests", // Optional, If you want to put more than one channel, separate using comma, example: 'general,random'
    initial_comment: title,
    file: require('fs').createReadStream(path), // Optional, via multipart/form-data. If omitting this parameter, you MUST submit content
  });
}
