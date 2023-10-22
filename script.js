<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

// make the first page pic move with the mouse 

var imageContainer = document.getElementById('image-container');

imageContainer.addEventListener('mousemove', function(e) {
  var rect = imageContainer.getBoundingClientRect();
  var offsetX = e.clientX - rect.left;
  var offsetY = e.clientY - rect.top;
  
  var moveX = (offsetX - rect.width / 5) / rect.width * 50;
  var moveY = (offsetY - rect.height / 5) / rect.height * 50;
  
  imageContainer.style.setProperty('--tx', moveX + 'px');
  imageContainer.style.setProperty('--ty', moveY + 'px');
  imageContainer.classList.add('moved');
});

imageContainer.addEventListener('mouseleave', function() {
  imageContainer.classList.remove('moved');
});

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}