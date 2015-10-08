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
      starFoz: {
        files: {
          'out/starfoz': ['../../3-Angular/starfoz/src/**/*.js' ]
        }
      },
      helloGrunt: {
        files: {
          'out/helloGrunt': ['src/**/*.js' ]
        }
      }
    }
  });
  // 2
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-plato');
  // 3
  grunt.registerTask('analysis', ['jshint','plato:helloGrunt']);

  grunt.registerTask('default', function() {
    console.log(grunt.option('param'));
    console.log('PATH:', process.env.PATH);
    grunt.run([ 'analysis' ]); 
  });
}