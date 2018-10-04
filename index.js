/**********************************************
 * SONAR WRAPPER
 * node.js module for sonarqube (v6.x) analisys
 * see readme.md file for more informations
 **********************************************/
'use strict';
var path = require('path');

// sonar file paths
var script = path.join(__dirname, 'bin', 'sonar-scanner.sh');
var scannerPropertiesPath = path.join(__dirname, 'conf', 'sonar-scanner.properties');
var projectPropertiesPath = path.join(__dirname, 'conf', 'sonar-project.properties');

// js parts requirements
var defaultOptions = require('./conf/defaultOptions');
var debug = require('./lib/debug');
var sonarRunner = require('./lib/sonarRunner');
var apiFetecher = require('./lib/sonarApiFetcher');


/**
 * MAIN FUNCTION
 * @param {string} sonarUrl
 * @param {Object<string, string>} options
 * @param {Array<string>} metricsResult
 */
function runAnalisys(sonarUrl, options, metricsResult) {

    var projectOptions = options || defaultOptions.projectOptions;
    var metricsOptions = metricsResult || defaultOptions.resultsMetrics;

    debug.initConf(options, metricsResult);

    return new Promise(function(resolve, reject) {
       return  sonarRunner.run(script, projectOptions, sonarUrl).then(function(){
            apiFetecher.fetchInfos(sonarUrl, metricsOptions, projectOptions['sonar.projectKey']).then(function(data) {
                resolve(data);
            });
       });  
    });

}


module.exports = {
    runAnalisys: runAnalisys
};