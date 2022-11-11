const _ = require('lodash');
module.exports = object => _.mapKeys(object, (value, key) => key.toLowerCase());
