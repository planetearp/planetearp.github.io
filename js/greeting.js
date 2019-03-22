// Typed H1 Greeting

var typing = document.getElementById('welcome');
typing.innerHTML = '';
var n = 0;
var blinkingTitle = 'Welcome to Planet Earp';
var typeTimer = setInterval(function() {
  n = n + 1;
  typing.innerHTML = blinkingTitle.slice(0, n);
  if (n === blinkingTitle.length) {
    clearInterval(typeTimer);
    typing.innerHTML = blinkingTitle;
    n = 0;
    setInterval(function() {

      if (n === 0) {
        typing.innerHTML = blinkingTitle + "_"
        n = 1;
      } else {
        typing.innerHTML = blinkingTitle + "  "
        n = 0;
      };
    }, 600);
  };
}, 100)



