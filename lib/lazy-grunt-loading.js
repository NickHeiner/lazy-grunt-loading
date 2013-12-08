var hooker = require('hooker'),
    _ = require('lodash'),
    _str = require('underscore.string'),
    path = require('path'),

    getTaskNames = require('./core/get-task-names');

module.exports = function(grunt, taskFiles, overrides, log) {

    hooker.hook(grunt.task, 'run', {
        pre: function(toRun) {

            getTaskNames(toRun).forEach(function(taskToRun) {
                    var taskFile = _.find(taskFiles, function(taskFilePath) {
                        var basename = path.basename(taskFilePath, '.js');
                        var taskFilePathWithoutGruntPrefix = _str.ltrim(basename, 'grunt-');
                        var withOverride = overrides[taskFilePathWithoutGruntPrefix] || taskFilePathWithoutGruntPrefix;
                        return withOverride === taskToRun;
                    });

                    if (taskFile) {
                        var startTime = Date.now();
                        log('Loading task ' + taskFile);
                        var taskFn = require(taskFile);
                        taskFn(grunt);
                        log(' ' + Date.now() - startTime + 'ms');
                    } else {
                        log(
                            'Not loading ' + taskToRun + ' - I hope it is an alias. If it is just a single task, ' +
                                ' ensure that the task name matches the file name. If not, add an entry to the ' +
                                'overrides.'
                        );
                    }
                });

            return true;
        }
    });
};