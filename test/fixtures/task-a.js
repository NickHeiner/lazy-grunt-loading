'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('task-a', function() {
        console.log('task a works');
    });

    grunt.config('task-a', {
        'target-a': {
        }
    });
};