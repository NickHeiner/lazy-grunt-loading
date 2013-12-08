'use strict';

var _ = require('lodash'),
    _str = require('underscore.string'),
    path = require('path');

function taskFileMatchesTaskName(taskToRun, overrides, taskFilePath) {
    var basename = path.basename(taskFilePath, '.js');
    var taskFilePathWithoutGruntPrefix = _str.ltrim(basename, 'grunt-');
    var withOverride = overrides[taskFilePathWithoutGruntPrefix] || taskFilePathWithoutGruntPrefix;
    return withOverride === taskToRun;
}

module.exports = _.curry(taskFileMatchesTaskName);