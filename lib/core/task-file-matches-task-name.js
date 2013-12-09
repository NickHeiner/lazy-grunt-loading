'use strict';

var _ = require('lodash'),
    _str = require('underscore.string'),
    path = require('path');

function taskFileMatchesTaskName(taskToRun, rawOverrides, taskFilePath) {

    var overrides = rawOverrides || {},
        basename = path.basename(taskFilePath, '.js'),
        gruntPrefix = 'grunt-',
        basenameStartsWithGruntPrefix = _str.startsWith(basename, gruntPrefix),
        taskFilePathWithoutGruntPrefix = basename.substring(basenameStartsWithGruntPrefix ? gruntPrefix.length : 0),
        withOverride = overrides[taskFilePathWithoutGruntPrefix] || taskFilePathWithoutGruntPrefix;

    return withOverride === taskToRun;
}

module.exports = _.curry(taskFileMatchesTaskName);