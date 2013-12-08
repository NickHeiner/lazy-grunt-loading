'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');

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
        },

        mochaTest: {
            unit: {
                src: ['test/unit/**/*.js']
            }
        }
    });

    grunt.registerTask('default', 'test');
    grunt.registerTask('test', 'jshint', 'mochaTest');

};