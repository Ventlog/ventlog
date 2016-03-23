document.addEventListener("DOMContentLoaded", function() {

  var button = document.getElementById("loadMoreBttn");

  button.onclick = function () {
    ajaxGet("statuses-1.html", function(str) {
      document.getElementById("extra_statuses").innerHTML = str;
    });

    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //   if (xhttp.readyState == 4 && xhttp.status == 200) {
    //     document.getElementById("extra_statuses").innerHTML = xhttp.response;
    //   }
    // };
    // xhttp.open("GET", "statuses-1.html", true);
    // xhttp.send();
  }
});
