
define([
    'base/js/namespace',
    ], function(Jupyter) {
    "use strict";

    var set_autosave = function() {
        var duration_in_mn = 3;
        Jupyter.notebook.set_autosave_interval(duration_in_mn*1000*60);
        console.log('set autosave to '+duration_in_mn+' minutes');
    };

    var _on_load = function () {
        set_autosave();
    };

    return {
        load_ipython_extension : _on_load,
    };
});

