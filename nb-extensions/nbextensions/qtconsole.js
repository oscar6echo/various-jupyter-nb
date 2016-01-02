
define([
    'base/js/namespace',
    'base/js/events'
], function(Jupyter, events) {

    var create_button = function() {
        Jupyter.toolbar.add_buttons_group([
            {'label'   : 'run qtconsole',
             'icon'    : 'fa-binoculars', // select your icon from http://fortawesome.github.io/Font-Awesome/icons
             'callback': function () {
                 Jupyter.notebook.kernel.execute('%qtconsole');
             }
            }
            ]);
    };

    // var _on_load = function () {
    //     events.on('app_initialized.NotebookApp', create_button());
    // };

    var _on_load = function () {
        create_button();
    };

    return {
        load_ipython_extension : _on_load,
    };
});
