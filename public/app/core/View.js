define([
    'backbone',
    'underscore'
], function(Backbone, _) {
    'use strict';
    
    return Backbone.View.extend({

        initialize: function () {
            Backbone.View.prototype.initialize.apply(this, arguments);
            _.extend(this, this.options);
        },

        empty: function() {
            if(!!this.$el) {
                this.$el.empty();
            }
        },

        show: function() {
            if (!!this.$el) {
                this.$el.show();
            }
        },

        hide: function() {
            if (!!this.$el) {
                this.$el.hide();
            }
        },

        isHidden: function() {
            if (!!this.$el) {
                return this.$el.is(':hidden');
            }
        },
    });
});
