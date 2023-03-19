const brain = require('brain.js');
const fs = require('fs');

const json = JSON.parse(fs.readFileSync('RNA.json', 'utf8'));
const loadedModel = new brain.recurrent.LSTM().fromJSON(json);

const pregunta='quienes son tus creadores'
const run1= loadedModel.run(pregunta);
console.log('YO:'+pregunta + `\n`+"BOT:"+run1);