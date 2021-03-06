/*
 * cahoots-submission-platform
 *
 * Copyright Cahoots.pw
 * MIT Licensed
 *
 */

/**
 * @author André König <andre@cahoots.ninja>
 *
 */

'use strict';

var expect = require('expect.js');

var platform = require('../');

describe('The platform\'s submission service', function suite () {

    it('should be able to insert a new submission', function test (done) {
        var service = platform('submission');

        var submission = {
            authorName: 'André König',
            authorInfo: 'http://andrekoenig.info',
            organizationName: 'Cahoots',
            organizationInfo: 'http://cahoots.pw',
            cahootsSource: 'http://cahoots.pw',
            role: ''
        };

        function onInsert (err) {
            expect(err).to.be(null);

            done();
        }

        service.insert(submission, onInsert);
    });

});
