'use strict';

var projectOptions = {
    'sonar.language': 'js',
    'sonar.projectKey': 'sk-sonar-wrapper-generated',
    'sonar.projectName': 'SonarWrapperNameGenerated',
    'sonar.projectVersion': '0.1.0',
    'sonar.sources': 'src',
    'sonar.test': 'src',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.exclusions': 'node_modules/,**/*.spec.js'
}

var resultsMetrics = [
    'code_smells',
    'bugs',
    'alert_status',
    'violations'
];

module.exports = {
    projectOptions: projectOptions,
    resultsMetrics: resultsMetrics
}