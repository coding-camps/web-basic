'use strict';
require([
    'jquery',
    'underscore',
    'backbone',
    'text',
    'domReady',
    'handlebars',
    'i18n',
    '_str',
    'mymodule'
], function($, _, backbone, text, domReady, handlebars, i18n, _str, mymodule) {
    console.log('loading successfully~!')
    console.log('require = ', require.version);
    console.log('jquery = ', $.fn.jquery);
    console.log('underscore =', _.VERSION);
    console.log('backbone =', backbone.VERSION);
    console.log('handlebars = ', handlebars.VERSION);
    console.log('text = ', text.version);
    console.log('i18n = ', i18n.version);
    console.log('domReady =', domReady.version);
    console.log('_str = ', _str.VERSION);
    mymodule.run();
});
