var TextEditor = function() {"use strict";
	//function to initiate ckeditor
	var ckEditorHandler = function() {
		CKEDITOR.disableAutoInline = true;
		$('textarea.ckeditor').ckeditor();
	};

	return {
		init: function() {
			ckEditorHandler();
		}
	};
}();
