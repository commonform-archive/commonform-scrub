var analyze = require('commonform-analyze');
var validate = require('commonform-validate');

module.exports = function(project) {
  if (!validate.project(project)) {
    throw new Error('Invalid project');
  }

  var analysis = analyze(project);

  return [];
}

module.exports.version = '0.0.0-prerelase';
