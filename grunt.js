module.exports = function(grunt){

  grunt.initConfig({
    compass: {
      dist2: {
        src: '/assets/stylesheets',
        dest: '/public/stylesheets'
      }
    },
    cssmin: {
      all: {
        src: 'public/stylesheets/style.css',
        dest: 'public/stylesheets/style.min.css'
      }
    },
    coffee: {
      dist1: {
        files: [ 'assets/javascripts/models/*', 'assets/javascripts/collections/*', 'assets/javascripts/views/*', 'assets/javascripts/plugins/*' ],
        dest: 'public/javascripts/medibot-client.js'
      }
    },
    concat: {
      dist2: {
        src: [ 'assets/vendor/javascripts/*' ],
        dest: 'public/javascripts/vendor.js'
      }
    },
    min: {
      dist1: {
        src: [ '<config:coffee.dist1.dest>' ],
        dest: 'public/javascripts/medibot-client.min.js'
      },
      dist2: {
        src: [ '<config:concat.dist2.dest>' ],
        dest: 'public/javascripts/vendor.min.js'
      }
    },
    watch: {
      dist1: {
        files: '<config:coffee.dist1.files>',
        tasks: 'simple'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'coffee min concat compass cssmin ok');
  grunt.registerTask('simple', 'coffee min');

};