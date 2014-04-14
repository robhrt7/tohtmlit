module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
        options: {
            compress: true
        },
        main: {
            files: {
                "css/style.css": "css/less/style.less",
                "css/icon-font.css": "css/less/icon-font.less"
            }
        }
    },

    watch: {
        main: {
            files: 'css/**/*.less',
            tasks: ['less:main'],
            options: {
                nospawn: true
            }
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task.
  grunt.registerTask('default', ['less']);

};
