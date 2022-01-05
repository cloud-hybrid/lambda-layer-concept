const {v1} = require("uuid");
const {v3} = require("uuid");
const {v4} = require("uuid");
const {v5} = require("uuid");
const {version} = require("uuid");
const {validate} = require("uuid");
const {stringify} = require("uuid");
const {parse} = require("uuid");

module.exports.v1 = v1;
module.exports.v3 = v3;
module.exports.v4 = v4;
module.exports.v5 = v5;

module.exports.version = version;
module.exports.validate = validate;
module.exports.stringify = stringify;

module.exports.parse = parse;

module.exports.default = {
    v1, v3, v4, v5, version, validate, stringify, parse
};
