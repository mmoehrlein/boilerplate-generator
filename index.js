const shell = require('shelljs');

const basicSetup = require('./setupBasic');
const packageSetup = require('./setupPackages');

async function setup(){
    await basicSetup();
    let index = await packageSetup();
    let file = path.join(process.env.pwd, 'index.js');
    await shell.outputFile(file, index);
}
