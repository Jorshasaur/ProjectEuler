/*global module:false*/
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    coffee:{
      options:{
        bare: true
      },
      glob_to_multiple:{
        expand: true,
        cwd: 'app/',
        src:['**/**/*.coffee'],
        dest: 'app',
        ext: ".js"
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['app/problems/**/*.js']
      }
    },
    qunit: {
      files: ['/app/tests/**/*.html']
    },

    watch: {
      files: ['/app/tests/**/*.coffee', '/app/problems/**/*.coffee'],
      tasks: ['default']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task.
  grunt.registerTask('default', ['coffee', 'jshint', 'qunit']);
};
