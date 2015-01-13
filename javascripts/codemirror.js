var createEdit = function() {
  var node = $('.code');
  for(var i = 0; i < node.length; ++i) {
    var editor = CodeMirror.fromTextArea(node[i], {
      theme: '3024-night',
      scrollbarStyle: 'overlay',
      lineNumbers: true,
      readOnly: 'nocursor',
      mode: 'htmlmixed',
      viewportMargin: Infinity
    });
  }
}();
