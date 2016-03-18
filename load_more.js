document.addEventListener("DOMContentLoaded", function(event) {

  function addEvent(el, eventType, handler) {
    if (el.addEventListener) { // DOM Level 2 browsers
      el.addEventListener(eventType, handler, false);
    } else if (el.attachEvent) { // IE <= 8
      el.attachEvent('on' + eventType, handler);
    } else { // ancient browsers
      el['on' + eventType] = handler;
    }
  }

  var button = document.getElementById("loadMoreBttn");
  addEvent(button, 'click', function() {
    alert("Hello");
  });

  addEvent(button, 'click', function() {
    alert("world!");
  });


  function loadMoreStatuses() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("extra_statuses").innerHTML = xhttp.responseText;
      }
    };
    xhttp.open("GET", "statuses-1.html", true);
    xhttp.send();
  }
}
