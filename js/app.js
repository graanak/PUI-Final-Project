// Famous mouse trail example for getting a trailing cursor animation

var mouseTrail = document.getElementById('mouse-trail');
var image = new Image();
image.src = 'images/sparkle.svg';
var trailLength = 8;
var images = [];

document.addEventListener('mousemove', function(event) {
  var x = event.clientX;
  var y = event.clientY;
  var img = document.createElement('img');
  img.src = image.src;
  img.style.left = x + 'px';
  img.style.top = y + 'px';
  images.push(img);
  if (images.length > trailLength) {
    mouseTrail.removeChild(images.shift());
  }
  mouseTrail.appendChild(img);


  for (var i = 0; i < images.length; i++) {
    var trailX = parseInt(images[i].style.left);
    var trailY = parseInt(images[i].style.top);
    var distance = Math.sqrt(Math.pow(x - trailX, 2) + Math.pow(y - trailY, 2));
    var opacity = 1 - distance / 100;
    images[i].style.opacity = opacity;
  }
});


