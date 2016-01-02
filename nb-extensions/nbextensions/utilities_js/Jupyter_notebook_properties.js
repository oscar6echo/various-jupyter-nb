
var obj = Jupyter.notebook;
console.log('Jupyter.notebook all properties:');
console.log(Object.getOwnPropertyNames(obj));
// console.log(keys(obj));

var obj = Jupyter.notebook;
console.log('Jupyter.notebook all methods:');
console.log(Object.getOwnPropertyNames(obj).filter(function(d){ return typeof obj[d]==='function'; }));

var obj = Jupyter.notebook.__proto__;
console.log('Jupyter.notebook.__proto__ all methods:');
console.log(Object.getOwnPropertyNames(obj).filter(function(d){ return typeof obj[d]==='function'; }));



// Jupyter.notebook all properties:
// VM1201:5 ["config", "class_config", "base_url", "notebook_path", "notebook_name", "events", "keyboard_manager", "contents", "save_widget", "tooltip", "ws_url", "_session_starting", "last_modified", "scroll_manager", "element", "next_prompt_number", "session", "kernel", "kernel_busy", "clipboard", "undelete_backup", "undelete_index", "undelete_below", "paste_enabled", "writable", "mode", "metadata", "_checkpoint_after_save", "last_checkpoint", "checkpoints", "autosave_interval", "autosave_timer", "minimum_autosave_interval", "notebook_name_blacklist_re", "nbformat", "current_nbformat_minor", "nbformat_minor", "codemirror_mode", "container", "kernel_selector", "dirty", "trusted", "_fully_loaded"]
// VM1201:9 Jupyter.notebook all methods:
// VM1201:10 []
// VM1201:13 Jupyter.notebook.__proto__ all methods:
// VM1201:14 ["constructor", "create_elements", "bind_events", "warn_nbformat_minor", "set_dirty", "scroll_to_cell", "scroll_cell_percent", "scroll_to_bottom", "scroll_to_top", "edit_metadata", "get_cell_elements", "get_cell_element", "get_msg_cell", "ncells", "get_cells", "get_cell", "get_next_cell", "get_prev_cell", "find_cell_index", "index_or_selected", "get_selected_cell", "is_valid_cell_index", "get_selected_index", "get_selection_anchor", "get_selected_cells", "get_selected_indices", "select", "_select", "select_next", "select_prev", "extend_selection", "reset_selection", "get_edit_index", "handle_command_mode", "command_mode", "handle_edit_mode", "edit_mode", "ensure_focused", "focus_cell", "move_cell_up", "move_cell_down", "_unsafe_delete_cell", "delete_cell", "undelete_cell", "insert_cell_at_index", "_insert_element_at_index", "insert_cell_above", "insert_cell_below", "insert_cell_at_bottom", "to_code", "to_markdown", "to_raw", "_warn_heading", "to_heading", "enable_paste", "disable_paste", "cut_cell", "copy_cell", "paste_cell_replace", "paste_cell_above", "paste_cell_below", "split_cell", "merge_cells", "merge_selected_cells", "merge_cell_above", "merge_cell_below", "collapse_output", "collapse_all_output", "expand_output", "expand_all_output", "clear_output", "clear_all_output", "scroll_output", "scroll_all_output", "toggle_output", "toggle_all_output", "toggle_output_scroll", "toggle_all_output_scroll", "cell_toggle_line_numbers", "_dispatch_mode", "set_codemirror_mode", "start_session", "_session_started", "_session_start_failed", "restart_kernel", "execute_cell", "execute_cell_and_insert_below", "execute_cell_and_select_below", "execute_cells_below", "execute_cells_above", "execute_all_cells", "execute_cell_range", "get_notebook_name", "set_notebook_name", "test_notebook_na

