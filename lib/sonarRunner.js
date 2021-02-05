'use strict';

var child = require('child_process');

function run(execPath, projectOptions, sonarUrl) {

    return new Promise(function(resolve, reject) {

        console.log(projectOptions);

        var parameters = ['-Dsonar.host.url=' + sonarUrl];
        for(var k in projectOptions) {
            parameters.push('-D' + k  + '=' + projectOptions[k]);
        }

        console.log(parameters);

        child.execFile(execPath, parameters , function(error, stdout, stderr) {
            if(error) {
                console.log(error);
            } else {
                for(var line of stdout.split('\n')) {
                    console.log('-- : ' + line);
                }
            }
            resolve();
        });

    }); 
}

module.exports = {
    run: run
};