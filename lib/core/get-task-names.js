'use strict';

function getTaskNames(toRun) {
    return [].concat(toRun)
        .map(function(taskName) {
            var colonIndex = taskName.indexOf(':');
            return colonIndex === -1 ? taskName : taskName.substring(0, colonIndex);
        });
}

module.exports = getTaskNames;