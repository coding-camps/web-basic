'use strict';
 define([
     'jquery',
     'text!testv.html'
 ], function($, testv) {
     return {
         run: function() {
             console.log('My own lib loading successfully~!', $.fn.jquery);
             console.log(testv);
             $('#root').html(testv);
         }
     };
 });