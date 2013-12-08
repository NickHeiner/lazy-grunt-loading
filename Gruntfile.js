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
            },

            test: {
                options: {
                    expr: true,         // allow expressions like foo.ok;
                    node: true,
                    globals: {
                        it: true,
                        beforeEach: true,
                        afterEach: true,
                        describe: true
                    }
                },
                files: {
                    src: [
                        'test/**/*.js',
                        '!test/sandbox/**/*'
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