var hooker = require('hooker'),
    _ = require('lodash'),

    getTaskNames = require('./core/get-task-names'),
    taskFileMatchesTaskName = require('./core/task-file-matches-task-name');

module.exports = function(grunt, taskFiles, overrides, rawLog) {

    var log = rawLog || function() {};

    hooker.hook(grunt.task, 'run', {
        pre: function(toRun) {

            getTaskNames(toRun).forEach(function(taskName) {
                var taskFile = _.find(taskFiles, taskFileMatchesTaskName(taskName, overrides));

                if (taskFile) {
                    var startTime = Date.now();
                    log('Loading task ' + taskFile);
                    var taskFn = require(taskFile);
                    taskFn(grunt);
                    log(' ' + Date.now() - startTime + 'ms');
                } else {
                    log(
                        'Not loading ' + taskName + ' - I hope it is an alias. If it is just a single task, ' +
                            ' ensure that the task name matches the file name. If not, add an entry to the ' +
                            'overrides.'
                    );
                }
            });

            return true;
        }
    });
};