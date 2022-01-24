define([
    'backbone',
    'underscore'
], function(Backbone, _) {
    'use strict';

    var ParentModel = Backbone.Model.extend({

        /**
         * Ref: https://stackoverflow.com/questions/10118988/whats-the-difference-between-initialize-and-constructor-on-a-backbone-model
         */
        initialize: function() {
            console.log("log on ParentModel")
            Backbone.Model.initialize.call(this, arguments);
        }
    });

    Collection.prototype.model = ParentModel;

    return ParentModel;
});
