
function end() {
  window.parent.postMessage("foo", "*");
}

window.setTimeout(end, 3000);

window.onload = function(event) {
  document.getElementById('template').innerHTML = document.location.hash;
}