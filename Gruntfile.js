'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
        jshint: {
            lib: {
                options: {
                    node: true
                },
                files: {
                    src: [
                        'lib/**/*.js',
                        'Gruntfile.js'
                    ]
                }
            }
        }
    });

    grunt.registerTask('default', 'test');
    grunt.registerTask('test', 'jshint');

};