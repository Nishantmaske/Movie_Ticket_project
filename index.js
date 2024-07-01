let mainPage = document.querySelector(".mainPage");
let newsContent = document.querySelector(".newsContent");
let cardfirst = document.querySelector(".cardfirst");
let cardsecond = document.querySelector(".cardsecond");
let contactus = document.querySelector(".contact");

function home() {
   mainPage.style.display = "flex";
   cardfirst.style.display = "block";
   cardsecond.style.display = "block";
   newsContent.style.display = "block"
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("home").style.color = "rgb(1, 190, 190)";
   document.getElementById("contact").style.color="black";

}


function trending() {
   cardfirst.style.display = "block";
   cardsecond.style.display = "block";
   mainPage.style.display = "none"
   newsContent.style.display = "none";
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("shop").style.color = "rgb(1, 190, 190)"
   document.getElementById("home").style.color = "black"
   document.getElementById("contact").style.color="black";

}


function news() {

   cardfirst.style.display = "none";
   cardsecond.style.display = "none";
   mainPage.style.display = "none";
   newsContent.style.display = "block"
   contactus.style.display="none"

   document.getElementById("blog").style.color = "rgb(1, 190, 190)";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black"
   document.getElementById("contact").style.color="black";

}


function contact() {
   contactus.style.display="block";
   cardfirst.style.display = "none";
   cardsecond.style.display = "none";
   mainPage.style.display = "none";
   newsContent.style.display = "none"
   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="rgb(1, 190, 190)"
} 