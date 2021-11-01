const JsConfigPathsMapper = require('jsconfig-paths-jest-mapper');

module.exports = {
    moduleNameMapper: new JsConfigPathsMapper({ configFileName: "./jsconfig.json" })
};