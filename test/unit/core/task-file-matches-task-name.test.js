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

    it('handles a "grunt-" prefix', function() {
        expect(taskFileMatchesTaskName('sass', {}, 'node_modules/grunt-sass/tasks/grunt-sass.js')).to.equal(true);
    });

    it('checks the overrides', function() {
        expect(taskFileMatchesTaskName(
            'sass',
            {'my-fun-with-sass': 'sass'},
            'node_modules/grunt-sass/tasks/my-fun-with-sass.js')
        ).to.equal(true);
    });

});