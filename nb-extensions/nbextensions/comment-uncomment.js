// add new hotkey to toggle comments

define([
    'base/js/namespace',
    ], function(Jupyter) {
    "use strict";

    var add_edit_shortcuts = {
            'Alt-c' : {
                help    : 'toggle comments',
                help_index : 'eb',
                handler : function () {
                    var cm=IPython.notebook.get_selected_cell().code_mirror;
                    var from = cm.getCursor("start"), to = cm.getCursor("end");
                    cm.uncomment(from, to) || cm.lineComment(from, to);
                    return false;
                }
            }
    };

    var _on_load = function () {
        IPython.keyboard_manager.edit_shortcuts.add_shortcuts(add_edit_shortcuts);
    };

    return {
        load_ipython_extension : _on_load,
    };
});


