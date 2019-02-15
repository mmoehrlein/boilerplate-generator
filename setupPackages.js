const changelogSetup = require('./setupChangelog');
const configurationSetup = require('./setupConfiguration');
const documentationSetup = require('./setupDocumentation');
const githubTemplateSetup = require('./setupGithubTemplates');
const lambdaSetup = require('./setupLambda');
const loggerSetup = require('./setupLogger');
const manpageSetup = require('./setupManpages');
const npmScriptSetup = require('./setupNpmScripts');
const testSetup = require('./setupNpmScripts');

module.exports = async function setup(){
    let index = '';
    index += configurationSetup();
    index += loggerSetup();
    index += documentationSetup();
    index += npmScriptSetup();
    index += testSetup();
    index += lambdaSetup();
    index += manpageSetup();
    index += githubTemplateSetup();
    index += changelogSetup();
    return index;
};