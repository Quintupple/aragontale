/*!
 * Start Bootstrap - SB Admin 2 v4.1.1 (https://startbootstrap.com/themes/sb-admin-2)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin-2/blob/master/LICENSE)
 */

!(function(s) {
    "use strict";
    s(window).resize(function() {
            s(window).width() < 768 && s(".sidebar .collapse").collapse("hide"),
                s(window).width() < 480 && !s(".sidebar").hasClass("toggled") && (s("body").addClass("sidebar-toggled"), s(".sidebar").addClass("toggled"), s(".sidebar .collapse").collapse("hide"));
        }),
        s("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function(e) {
            if (768 < s(window).width()) {
                var o = e.originalEvent,
                    l = o.wheelDelta || -o.detail;
                (this.scrollTop += 30 * (l < 0 ? 1 : -1)), e.preventDefault();
            }
        });

})(jQuery);
