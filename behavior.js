document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('nav-button').addEventListener('click', function(){
    var body = document.getElementsByTagName('body')[0];
    if (body.className == 'nav-show') {
      body.className = '';
    }
    else {
      body.className = 'nav-show';
    }
  })
});
