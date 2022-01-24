'use strict';
 define([
     'jquery',
     'text!app/test/mymod.html'
 ], function($, testmymod) {
     return {
         run: function() {
             console.log('My own module x loading successfully~!');
             console.log(testmymod);
             $('#root').html(testmymod);
         }
     };
 });
 