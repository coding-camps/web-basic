'use strict';
require.config({
    baseUrl:'.',
    paths: {
        'jquery': 'lib/jquery-3.6.0',
        'underscore': 'lib/underscore-umd-1.13.1',
        'backbone': 'lib/backbone-1.4.0',
        'handlebars': 'lib/handlebars-v4.7.7',
        'text': 'lib/requirejs-plugin-text-2.0.16',
        'i18n': 'lib/requirejs-plugin-i18n-2.0.6',
        'domReady': 'lib/requirejs-plugin-domReady-2.0.1',
        '_str': 'lib/underscore.string-3.3.4',
        'bootstrap': 'lib/bootstrap/bootstrap.bundle',
        'mymodule': 'testmodule'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'handlebars': {
            deps: ['jquery'],
            exports: 'Handlebars'
        },
        'text': {
            deps: ['require']
        },
        'i18n': {
            deps: ['require']
        },
        'bootstrap' : {
            deps: ['jquery'],
            exports: 'boots'
        },
        '_str': {
            deps: ['underscore'],
            exports: '_s'
        }
    }
});
