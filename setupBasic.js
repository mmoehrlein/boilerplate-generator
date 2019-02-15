const shell = require('shelljs');
const extend = require('extend');
const fs = require('fs-extra');
const path = require('path');


module.exports = async function setup(){
    if(!fs.pathExists(path.join(process.env.pwd, '.git'))){
        shell.exec('git init');
    }
    createGitIgnore();
    createPackageJson();
};

/**
 * create a package.json file
 * @param {{
 *     name : string
 *     description : string
 *     scripts : Object
 *     license : string
 *     keywords : Array.<string>
 *     repository : string
 *     homepage : string
 *     bin : Object
 * }}options
 * @returns {Promise<void>}
 */
async function createPackageJson(options){
    options = options || {};
    options.name = options.name || process.env.pwd.split('/').pop().toLowerCase();
    let packagejson = {
        name: options.name,
        version: '1.0.0',
        description: options.desctiption,
        main: options.main || 'index.js',
        scripts: {
            start: `node ${options.name}`,
            test: 'echo \"Error: no test specified\" && exit 1'
        },
        author: 'Michael Moehrlein <code@moehrlein.io>',
        license: options.license || 'MIT',
        keywords: options.keywords || [],
        repository: options.repository || `github:mmoehrlein/${options.name}`,
        homepage: options.homepage || `https://github.com/mmoehrlein/${options.name}#readme`
    };

    if(options.bin){
        packagejson.bin = options.bin
    }

    await fs.outputJson(path.join(process.env.pwd, 'package.json'), packagejson, {spaces: 2});
}

/**
 * create a .gitignore file
 *
 * @returns {Promise<void>}
 */
async function createGitIgnore(){
    let ignorefile = ['.idea', 'node_modules', '.env'].join('\n');
    let file = path.join(process.env.pwd, '.gitignore');
    await shell.outputFile(file, ignorefile);
}