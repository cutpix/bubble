define([
    'require',
    'data'
], function (require, data) {
    'use strict';

    // Initialize the default app
    var defaultApp = firebase.initializeApp(defaultAppConfig);
    console.log(defaultApp.name);  // "[DEFAULT]"
    
    var bookmark = data.get('bookmarks', {
        id: 15
    });

    console.log(bookmark);
});