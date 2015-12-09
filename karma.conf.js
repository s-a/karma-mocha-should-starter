module.exports = function(config) {
  config.set({
    jsonFixturesPreprocessor: {
        variableName: '__json__'
    },
    basePath: '',
    frameworks: ['mocha', 'fixture', 'should'],
    files: [
        'test/*Spec.js',
        {pattern: 'test/*.html', watched: true, served: true, included: true}
    ],
    plugins : [ // !IMPORTANT
        'karma-fixture',
        'karma-html2js-preprocessor',
        'karma-json-fixtures-preprocessor',
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-mocha',
        'karma-should'
    ],
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.html'   : ['html2js'],
      '**/*.json'   : ['json_fixtures']
    },
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'/*, 'Firefox'*/],
    singleRun: true
  });
};
