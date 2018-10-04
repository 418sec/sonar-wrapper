'use strict';

var line = '-----------------------------------';
var start = '-- : ';

function initConf(options, metricsResult) {

    console.log(line);

    if(!options) {
        console.log(start + "no analyses options given");
        console.log(start + "project will be analysed by default");
    }

    if(!metricsResult) {
        console.log(start + '\n' + start + "no metrics keys given");
        console.log(start + "callback will be set by default");
    }
}

module.exports = {
    initConf: initConf
};