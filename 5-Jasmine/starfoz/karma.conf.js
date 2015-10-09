// Karma configuration
// Generated on Thu Oct 08 2015 23:38:49 GMT-0300 (PYST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'lib/angular/angular.min.js',
      'lib/angular-mocks/angular-mocks.js',
      'lib/angular-route/angular-route.min.js',
      'lib/angular-cookies/angular-cookies.min.js',
      'lib/angular-messages/angular-messages.min.js',
      'lib/angular-sanitize/angular-sanitize.min.js',
      'lib/angular-translate/angular-translate.min.js',
      'lib/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
      'lib/angular-translate-storage-local/angular-translate-storage-local.min.js',
      'lib/jquery/dist/jquery.min.js',
      'app.js',
      'src/**/*.js',
      'tests/specs/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [ 'ChromeCanary'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
