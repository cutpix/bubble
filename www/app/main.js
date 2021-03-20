define([
    'require',
    'data'
], function (require, data) {
    'use strict';

    var bookmarks = data.get('bookmarks', {
        id: 15
    });

    console.log(data.bookmarks);
});