'use strict';

var Client = require('node-rest-client').Client;
var client = new Client();

/**
 * 
 * @param {string} sonarUrl 
 * @param {Object<string,string>} metricsOptions 
 * @param {string} projectName 
 */
function fetchInfos(sonarUrl, metricsOptions, projectName, sonarVersion) {

    // TODO set url depending on soanrVersion
    
    return new Promise(function(resolve, reject) {
        var url = sonarUrl + '/api/measures/component?component=' + projectName + '&metricKeys=';

        metricsOptions.forEach(function(option) {
            url += (option + ',');
        });
        url = url.substring(0, url.length - 1);

        return client.get(url, function(data, resp) {
            resolve(data);
        });
    });
}


module.exports = {
    fetchInfos: fetchInfos
};
