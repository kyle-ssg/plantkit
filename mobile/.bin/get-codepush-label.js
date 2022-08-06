const path = require('path')
const fs = require('fs')

const json = JSON.parse(process.argv[2]);
const environment = process.argv[3];
const label = (parseInt(json[json.length-1][0].substr(1)) +1) +"."+environment
const appJSONPath = path.join(__dirname,"../app.json");
const res = fs.readFileSync(appJSONPath,"utf8");


const appJSON = JSON.parse(res); // read the current app.json
appJSON.label = label; // parse the timestamp
const newRes = JSON.stringify(appJSON); // write the new app.json
fs.writeFileSync(appJSONPath, newRes)

console.log(label)
