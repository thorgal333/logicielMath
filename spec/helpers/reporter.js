var Reporter = require('jasmine-terminal-reporter');
let options = {}
options.isVerbose = true
var reporter = new Reporter(options)
jasmine.getEnv().addReporter(reporter); 