
define([
    'base/js/namespace',
    'require',
    ], function(Jupyter, require) {
    "use strict";

    var load_css = function (name) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = require.toUrl(name, 'css');
        document.getElementsByTagName('head')[0].appendChild(link);
    };

    // var set_cell_width = function() {
    //     var style = '.container { width:95% !important; }';
    //     var css = $('<style>').text(style);
    //     var div = Jupyter.notebook.element[0];
    //     $(div).append(css)
    //     console.log('style '+css+' appended to Jupyter.notebook.element[0]');
    // };

    var _on_load = function () {
        // set_cell_width();
        load_css('./my_default.css')
    };

    return {
        load_ipython_extension : _on_load,
    };
});

