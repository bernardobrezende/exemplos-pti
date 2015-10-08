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
    }
  });

  // 2 - Loading external plugins from package.json
  require('load-grunt-tasks')(grunt);

  // 3 - Customizing default task pipeline
  grunt.registerTask('default', [
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