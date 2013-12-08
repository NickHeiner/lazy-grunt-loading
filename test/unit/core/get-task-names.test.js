'use strict';

var getTaskNames = require('../../../lib/core/get-task-names'),
    expect = require('chai').expect;

describe('get-task-names', function() {

    it('should return the argument as a singleton list when it is a single string without a colon', function() {
        var toRun = 'jshint';
        expect(getTaskNames(toRun)).to.deep.equal([toRun]);
    });

    it('should return the argument unchanged when is a list of tasks with no colons', function() {
        var toRun = ['jshint', 'foo-task', 'bar-task'];
        expect(getTaskNames(toRun)).to.deep.equal(toRun);
    });

});