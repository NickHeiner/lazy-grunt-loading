'use strict';

var expect = require('chai').expect,
    taskFileMatchesTaskName = require('../../../lib/core/task-file-matches-task-name');

describe('task-file-matches-task-name', function() {

    it('handles the happy path', function() {
        expect(taskFileMatchesTaskName('sass', {}, 'node_modules/grunt-sass/tasks/sass.js')).to.equal(true);
    });

    it('handles no overrides being passed', function() {
        expect(taskFileMatchesTaskName('sass', null, 'node_modules/grunt-sass/tasks/sass.js')).to.equal(true);
    });

});