// Photo Slider
let i = 0;
let images = [];
let time = 2000;
let link = []

let imageLink = document.getElementById("imageLink")

images[0] = "./images/image0.jpg";
link[0] = "https://c-e-n-e89d3.web.app/";
images[1] = "./images/image1.jpg";
link[1] = "https://api-fun-35f55.web.app/";
images[2] = "./images/image2.jpg";
link[2] = "https://rock-paper-scissors-4dffb.web.app/";

function changeImg(){
  document.slider.src = images[i];
  imageLink.href = link[i];

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
let contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", function() {
    let input = document.querySelector("input");
    input.innerText = "";
})

