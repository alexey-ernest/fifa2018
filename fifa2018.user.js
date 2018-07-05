// ==UserScript==
// @name Fifa2018
// @license MIT
// @version 1.0
// @include http://userscripts.org/*
// ==/UserScript==
(function (window, undefined) {
    var w;
    if (typeof unsafeWindow != undefined) {
        w = unsafeWindow
    } else {
        w = window;
    }
    if (w.self != w.top) {
        return;
    }
    
    // [4] дополнительная проверка наряду с @include
    if (/http:\/\/userscripts.org/.test(w.location.href)) {
        //Ниже идёт непосредственно код скрипта
        console.log('Hello from the user script.');
    }
})(window);