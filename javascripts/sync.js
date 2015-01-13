var addScriptAndStyle = function() {
  var c = [
      "../../CodeMirror/lib/codemirror.js",
      "../../CodeMirror/mode/xml/xml.js",
      "../../CodeMirror/mode/javascript/javascript.js",
      "../../CodeMirror/mode/css/css.js",
      "../../CodeMirror/mode/htmlmixed/htmlmixed.js",
      "../../CodeMirror/addon/scroll/simplescrollbars.js",
      "../../javascripts/codemirror.js"
  ];
  var s = [
    "../../CodeMirror/lib/codemirror.css",
    "../../CodeMirror/theme/3024-night.css",
    "../../CodeMirror/addon/scroll/simplescrollbars.css"
  ];
  for(var i = 0; i < s.length; ++i) {
    var ds = document.createElement('link');
    ds.type = 'text/css';
    ds.async = true;
    ds.href = s[i];
    ds.rel = 'stylesheet';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
  }
  var i = 0;
  var loadscript = function() {
    if(i >= c.length) {
      return;
    }
    var ds = document.createElement('script');
    ds.type = 'text/javascript';
    ds.async = true;
    ds.src = c[i];
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
    ++i;
    ds.onload = loadscript;
  };
  loadscript();
};
$(document).ready(addScriptAndStyle);
