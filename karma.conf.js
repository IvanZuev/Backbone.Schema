module.exports = function (config) {
    'use strict';

    config.set({
        frameworks: ['mocha'],

        files: [
            // Assertion Libraries
            'bower_components/chai/chai.js',

            // Libraries
            'bower_components/jquery/dist/jquery.js',
            'bower_components/underscore/underscore.js',
            'bower_components/backbone/backbone.js',
            'bower_components/globalize/lib/globalize.js',

            // Sources
            'src/backbone/schema.js',

            // Tests
            'test/backbone/schema.test.js'
        ],

        preprocessors: {
            'src/**/*.js': ['coverage']
        },

        reporters: ['progress', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: 'coverage_reports'
        },

        reportSlowerThan: 75,

        browsers: ['Firefox', 'PhantomJS'],

        autoWatch: true
    });
};
