'use strict';

module.exports = function(grunt) {

  // 1 - Configuring external plugin specific targets
  grunt.initConfig({
    DEST_FOLDER: 'dist',
    jshint: {
      options: {
        jshintrc: true
      },
      files: [ 'src/**/*.js' ]
    },
    clean: [ '.tmp', '<%= DEST_FOLDER %>' ],
    copy: {
      html: {
        files: [
          { src: 'index.html', dest: '<%= DEST_FOLDER %>/' }
        ]
      }
    },
    useminPrepare: {
      html: [ 'index.html' ],
      options: {
        dest: '<%= DEST_FOLDER %>'
      }
    },
    usemin: {
      html: '<%= DEST_FOLDER %>/index.html'
    },
    filerev: {
      images: {
        src: [ '<%= DEST_FOLDER %>/img/**/*.{png,jpg,gif}' ],
      },
      styles: {
        src: [ '<%= DEST_FOLDER %>/**/*.css' ]
      },
      scripts: {
        src: [ '<%= DEST_FOLDER %>/**/*.js' ]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img',
          src: '**/*.{png,jpg,gif}',
          dest: '<%= DEST_FOLDER %>/img/'
        }]
      }
    },
    compress: {
      build: {
        options: {
          archive: function() {
            return new Date().getTime() + '-build-package.zip';
          },
          mode: 'zip'
        },
        files: [
          { src: '<%= DEST_FOLDER %>/**', flatten: true }
        ]
      }
    },
    connect: {
      server: {
        options: {
          port: 7777,
          base: 'dist',
          keepalive: true
        }
      }
    }
  });

  // 2 - Loading external plugins from package.json
  // carregar automaticamente:
  require('load-grunt-tasks')(grunt);
  /* ou carregar manualmente:
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-concat');
  */

  // 3 - Customizing default task pipeline
  grunt.registerTask('serve', [ 'connect:server' ]);

  grunt.registerTask('default', [
    'jshint',
    'clean',
    'copy:html',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'imagemin',
    'filerev',
    'usemin',
    'compress'
  ]);
};