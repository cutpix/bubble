define([
    'require',
    'data'
], function (require, data) {
    'use strict';

    var bookmark = data.get('bookmarks', {
        id: 15
    });

    console.log(bookmark);
});