define([
    'backbone',
    'underscore'
], function(Backbone, _) {
    'use strict';
    
    return Backbone.Router.extend({

        initialize: function (options) {
            Backbone.Router.prototype.initialize.apply(this, arguments);
            _.extend(this, options);
        },
    });
});