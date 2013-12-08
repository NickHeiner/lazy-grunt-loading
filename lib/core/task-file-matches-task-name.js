'use strict';

var _ = require('lodash'),
    _str = require('underscore.string'),
    path = require('path');

function taskFileMatchesTaskName(taskToRun, rawOverrides, taskFilePath) {
    
    var overrides = rawOverrides || {},
        basename = path.basename(taskFilePath, '.js'),
        taskFilePathWithoutGruntPrefix = _str.ltrim(basename, 'grunt-'),
        withOverride = overrides[taskFilePathWithoutGruntPrefix] || taskFilePathWithoutGruntPrefix;

    return withOverride === taskToRun;
}

module.exports = _.curry(taskFileMatchesTaskName);