/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */

'use strict';

hw2.define([
    "hw2!PATH_JS_LIB:browser/gui/include.js"
], function () {
    var $ = this;


    $.Browser.Template = $.class([
        $.private({
            html: null,
            css: null,
            js: null
        }),
        $.public({
            __construct: function (html, css) {
                this._i.html = html;
                this._i.css = css;
            },
            getHtml: function () {
                return this._i.html;
            },
            getCss: function () {
                return this._i.css;
            }
        })
    ]);
});