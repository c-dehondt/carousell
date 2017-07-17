var slideImage= ["img/image1.jpg","img/image4.jpg","img/image3.jpg","img/image5.jpeg","img/image7.jpeg","img/image8.jpg"];
var infoImage= ["image1","image2","image3","image4","image5","image6"];
var image= document.getElementById("monSlide");
var texteImage=document.getElementById("monTexte");

function carousel() {
  slideImage.push(slideImage.shift());
  image.src=slideImage[0];
  infoImage.push(infoImage.shift());
  texteImage.src=infoImage[0];
}
setInterval (carousel,2000);
