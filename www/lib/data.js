define([
    'require',
    'json!../data/bookmarks.json'
], function (require, bookmarks) {
    'use strict';

    function get(url, obj) {
        return bookmarks.filter(function (value) {
            return obj.id == value.id;
        });
    }

    return {
        get: get,
        bookmarks
    }
});