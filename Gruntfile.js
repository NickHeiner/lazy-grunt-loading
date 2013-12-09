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
                    expr: true,
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
    grunt.registerTask('test', ['jshint', 'mochaTest', 'e2e']);

    grunt.registerTask('e2e', function() {
        var lazyGruntLoading = require('./');
        lazyGruntLoading(grunt, [
            './test/fixtures/task-a.js',
            './test/fixtures/grunt-task-b.js',
            './test/fixtures/need-to-be-overridden.js'
        ], {}, grunt.verbose.write);

        grunt.task.run('task-a');
        grunt.task.run(['task-b']);
        grunt.task.run(['task-a:target-a']);
        grunt.task.run(['task-a', 'task-b', 'task-c']);
    });

};