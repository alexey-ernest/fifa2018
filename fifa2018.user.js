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
            
            console.log('Ready');

            addJQuery(function () {

                console.log('Ready');

                // get nav bar
                console.log($('[data-resource-id="AddProducts"]'));
                // const navbarScope = angular.element($('#TOPSNavbar')).scope();
                // console.log(navbarScope);

            });

        }, false);

    }
})(window);