sonar-wrapper
==================

Wrap [SonarQube Scanner](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner) as a node module.

# Installation

Install sonar-wrapper as node module in the dev dependencies

```shell
npm i sonar-wrapper --save-dev
```

# Requirements

This module is based on sonar-scanner Java ARchive, a Java Runtime Environement has to be present on the computer and set as JAVA_HOME env variable.

# Use

sonar-wrapper offers only one function to run analisys and get back the metrics result.

```javascript
var sonar = require('sonar-wrapper');

sonar.runAnalisys(sonarqube_server_url, options, metrics).then(function(result) {
  //handle the result here
});
```

# Settings

Run Sonar analisys require somme configurations, the module have to know the SonarQube server URL, the specifics options about project and wich informations you'll like to get back.

## SonarQube server url

A string value representing the sonarqube server url.

ex.
```javascript 
"http://localhost:9000" 
```

## Options

Options have to be a json Object representing the [sonar project properties](https://docs.sonarqube.org/display/SONAR/Analysis+Parameters) such as src folder , project name etc ...

It could be like bellow : 

```json
{
    "sonar.language": "js",
    "sonar.projectKey": "sk-sonar-tester-node-module",
    "sonar.projectName": "9019_SonarTesterNodeModule",
    "sonar.projectVersion": "0.76.0-dev.24",
    "sonar.sources": "src",
    "sonar.test": "src",
    "sonar.coverage.exclusions": "**/*.module.js,**/*.constants.js,**/*.spec.js",
    "sonar.sourceEncoding": "UTF-8",
    "sonar.exclusions": "node_modules/,**/*.spec.js"
}
```

## Metrics

An array of [metrics key name](https://docs.sonarqube.org/display/SONAR/Metric+Definitions) you want to get back after analisys

```javascript
var mertics = ['code_smells', 'bugs', 'alert_status', 'violations'];
```

# Check analisys results progamaticly

Have a look on the analisys result in the source code can be great for continous integration.
The main function runAnalisys() return a callback containing informations about analisys such as issues, code coverage (if set in options) or quality gate status.

```javascript
sonar.runAnalisys(sonarqube_server_url, options, resultMetrics).then(function(results) {

    console.log(JSON.stringify(results));
})
```

Will give the output : 

```json
{
  "component":{
    "id":"AWXn51sqgFSCIYM641s_",
    "key":"sk-sonar-tester-node-module",
    "name":"9019_SonarTesterNodeModule",
    "qualifier":"TRK",
    "measures":[
      {
        "metric":"code_smells",
        "value":"0",
        "periods":[
          {
            "index":1,
            "value":"0"
          }
        ]
      },
      {
        "metric":"bugs",
        "value":"0",
        "periods":[
          {
            "index":1,
            "value":"0"
          }
        ]
      },
      {
        "metric":"alert_status",
        "value":"OK"
      },
      {
        "metric":"violations",
        "value":"0",
        "periods":[
          {
            "index":1,
            "value":"0"
          }
        ]
      }
    ]
  }
}
```