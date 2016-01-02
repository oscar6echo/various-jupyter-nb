IPython.keyboard_manager.command_shortcuts.add_shortcut(
    'Ctrl-C,Meta-C,Meta-b,u,t,t,e,r,f,l,y',
    {
        handler:function(){
          window.open('https://xkcd.com/378/')
        }
    }
)

IPython.keyboard_manager.command_shortcuts.add_shortcut(
    'Meta-b,Meta-b,Meta-b',
    {
        handler:function(){
          window.open('https://xkcd.com/378/')
        }
    }
)

var clear_all_cells_restart = {
    help: 'Clear all cells and restart kernel without confirmations',
    icon : 'fa-recycle',
    help_index : '',
    handler : function (env) {
        var on_success = undefined;
        var on_error = undefined;
        env.notebook.clear_all_output();
        env.notebook.kernel.restart(on_success, on_error);
    }
}

IPython.keyboard_manager.command_shortcuts.add_shortcut(
    'Meta-b,Meta-b,Meta-b',
    clear_all_cells_restart
)



var events = require('base/js/events')
var utils = require('base/js/utils')
var configmod = require('services/config')
var config = new configmod.ConfigSection('myextension',
                                         {base_url: utils.get_body_data("baseUrl")});
// config.load();
// console.log('test');

var foo_config = new configmod.ConfigWithDefaults(config, {
                          visible: true,
                          colour: '#fe6500'
                        }, 'foo')

foo_config.get('colour').then(function(colour) {
  console.log('colour='+colour);
});



IPython.notebook.config.update({
  "load_extensions": {"hello-scipy": false}
})



var cell = Jupyter.notebook.get_selected_cell();
var config = cell.config;
var patch = {
      CodeCell:{
        cm_config:{indentUnit: null}
      }
    }
config.update(patch)




// first param reference to a DOM div
// second param reference to the cell.
var toggle =  function(div, cell) {
    var button_container = $(div)
    // let's create a button that show the  current value of the metadata
    var button = $('<div/>').button({label:String(cell.metadata.foo)});
    // On click, change the metadata value and update the button label
    button.click(function(){
                var v = cell.metadata.foo;
                cell.metadata.foo = !v;
                button.button("option", "label", String(!v));
            })
    // add the button to the DOM div.
    button_container.append(button);
}
// now we register the callback under the name `foo` to give the
// user the ability to use it later
CellToolbar.register_callback('foo', toggle);


define(['base/js/utils',
        'base/js/events'
       ], function(utils, events){
    function _onload(){
        events.on("app_initialized.NotebookApp", function () {
            utils.load_extensions('comment-uncomment');
        });
    }
    return {load_ipython_extension: _onload};
})



IPython.notebook.save_checkpoint();


var obj = Jupyter.notebook.__proto__;
console.log('Jupyter.notebook all methods:');
console.log(Object.getOwnPropertyNames(obj).filter(function(d){
    if (d==null) {
        return false;
    }
    else if (d==undefined) {
        return false;
    }
    else {
        return typeof obj[d]==='function';
    }
}));




