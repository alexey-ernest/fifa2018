// ==UserScript==
// @name Fifa2018
// @license MIT
// @version 1.0
// @include https://tickets.fifa.com/*
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
    
    if (/https:\/\/tickets.fifa.com/.test(w.location.href)) {
    
        window.addEventListener('load', function() {
            
            setTimeout(function () {
                console.log(angular);
                console.log(jQuery);
            }, 5000);
            

        }, false);

    }
})(window);