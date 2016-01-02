
define(['base/js/namespace',
       ], function(Jupyter){
    "use strict";

    var _onload = function () {
        var select_type =  function(div, cell) {
            // first param reference to a DOM div
            // second param reference to the cell.
            var positions = ['show', 'hide', 'toggle show', 'toggle hide'];
            cell.metadata.ezpublish = {'type': positions[0]};
            var button_container = $(div);
            var button = $('<button/>')
                            .addClass('btn btn-warning btn-xs')
                            .text(cell.metadata.ezpublish.type);

            button.click(function(){
                        var v = cell.metadata.ezpublish.type;
                        var i = positions.indexOf(v);
                        cell.metadata.ezpublish.type = positions[(i+1)%positions.length];
                        button.text(cell.metadata.ezpublish.type);
            });
            button_container.append(button);
        }
        var cellToobar = Jupyter.CellToolbar
        cellToobar.register_callback('ezpublish.type', select_type);
        cellToobar.register_preset('ezpublish',['ezpublish.type']);
    }

    return {load_ipython_extension: _onload};
});

