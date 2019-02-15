const shell = require('shelljs');
const fs = require('fs-extra');
const path = require('path');

module.exports = async function setup(){
    await shell.exec('npm i winston');
    fs.cp(path.join(__dirname, 'templates', 'loggerTemplate.js'), path.join(process.env.pwd, 'logger.js'));
    return 'const logger = require(\'./logger\');';
};