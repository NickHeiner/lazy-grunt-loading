'use strict';

var getTaskNames = require('../../../lib/core/get-task-names'),
    expect = require('chai').expect;

describe('get-task-names', function() {

    it('should return the argument unchanged when it is a single string without a colon', function() {
        var toRun = 'jshint';
        expect(getTaskNames(toRun)).to.deep.equal([toRun]);
    });

});