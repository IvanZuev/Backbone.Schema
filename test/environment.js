module.exports = (function () {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        Globalize = require('globalize'),

        chai = require('chai');

    ////////////////////

    global.window = require('./window.js');

    _.extend(Backbone, require('../index.js'), {
        $: require('../bower_components/jquery/dist/jquery.js')(window)
    });

    ////////////////////

    return {
        _: _,
        Backbone: Backbone,
        Globalize: Globalize,
        chai: chai
    };
}());
