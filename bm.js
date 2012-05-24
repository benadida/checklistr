
var HOST = "http://localhost:8000";

if (!window.__CL_LOADED) {
  // add the stylesheet
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = HOST + '/bm.css';
  
  document.getElementsByTagName('head')[0].appendChild(style);
  
  var content = '<div id="__cl_light" class="white_content"></div><div id="__cl_fade" class="black_overlay"></div>';
  
  document.getElementsByTagName('body')[0].innerHTML += content;

  function __CL_hide() {
    document.getElementById("__cl_light").style.display = 'none';
    document.getElementById("__cl_fade").style.display = 'none';
    document.getElementById("__cl_light").innerHTML = "";
  }
  
  // wait for response
  window.addEventListener('message', function(event) {
    if (event.origin == HOST) {
      __CL_hide();
      alert(event.data);
    }
  });
}

document.getElementById("__cl_light").innerHTML = '<iframe id="__cl_iframe" src=""></iframe>';
document.getElementById("__cl_iframe").src = HOST + '/cl.html#' + (window.__CL_TEMPLATE || '1');  

document.getElementById("__cl_light").style.display = 'block';
document.getElementById("__cl_fade").style.display = 'block';

window.__CL_LOADED = true;