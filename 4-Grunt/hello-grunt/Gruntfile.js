'use strict';

module.exports = function(grunt) {
  // 1
  grunt.initConfig({
    jshint: {
      options: {
        // http://jshint.com/docs/options/
        jshintrc: true
      },
      // glob
      files: 'src/**/*.js'
    },
    plato: {
      reportJs: {
        files: {
          'out': ['../../3-Angular/starfoz/src/**/*.js' ]
        }
      }
    }
  });
  // 2
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-plato');
}