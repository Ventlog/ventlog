function ajaxGet(url, onSuccess) {
  document.getElementById('loadMoreBttn').disabled = true;
  setTimeout(function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        onSuccess(xhttp.response)
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }, 2000);
}
