var urlParams = new URLSearchParams(window.location.search);
var version = urlParams.get('version');
document.body.classList.add('version--' + version);


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var bgID = getRandomInt(8);
document.body.style.backgroundImage = 'url(img/' + bgID + '.jpg)';
