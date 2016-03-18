document.addEventListener("DOMContentLoaded", function(event) {

  var button = document.getElementById("loadMoreBttn");

  button.onclick = function loadMoreStatuses() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("extra_statuses").innerHTML = xhttp.response;
      }
    };
    xhttp.open("GET", "/statuses-1.html", true);
    xhttp.send();
  }
}

// function addEvent(el, eventType, handler) {
//   if (el.addEventListener) { // DOM Level 2 browsers
//     el.addEventListener(eventType, handler, false);
//   } else if (el.attachEvent) { // IE <= 8
//     el.attachEvent('on' + eventType, handler);
//   } else { // ancient browsers
//     el['on' + eventType] = handler;
//   }
// }

// addEvent(button, 'click', function() {
//   alert("Hello");
// });
//
// addEvent(button, 'click', function() {
//   alert("world!");
// });
