// Photo Slider
var i = 0;
var images = [];
var time = 2000;

images[0] = "./images/image0.jpg";
images[1] = "./images/image1.jpg";
images[2] = "./images/image2.jpg";
images[3] = "./images/image3.jpg";

function changeImg(){
  document.slider.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg();


// Year
document.getElementById("year").innerText = new Date().getFullYear();

// Contact Button

// let contactBtn = document.getElementById("contact-btn");

// contactBtn.addEventListener("click", function() {
  
// })

