
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png-images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "<<🎉Player 1 Won🥳>>";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "<<🎉Player 2 Won🥳>>";
}
else{
  document.querySelector("h1").textContent = "<<-! Draw !->>";
}
