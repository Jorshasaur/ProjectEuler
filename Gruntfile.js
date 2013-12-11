/*global module:false*/
module.exports = function(grunt) {
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
        globals: {
          console: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      files: {
        src: ['app/problems/**/*.js']
      }
    },
    
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'spec'
      },
  
      all: { src: ['app/tests/**/*.js'] }
    },

    watch: {
      files: ['app/tests/**/*.coffee', 'app/problems/**/*.coffee'],
      tasks: ['default']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task.
  grunt.registerTask('default', ['coffee', 'simplemocha']);
};
