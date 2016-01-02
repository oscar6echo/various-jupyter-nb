console.log('all keyboard shortcuts listed:');

$.map(
    Jupyter.keyboard_manager.command_shortcuts.actions._actions,
    function(k,v){return v}
);

