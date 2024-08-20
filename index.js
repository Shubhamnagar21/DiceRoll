
var imagearray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var rand1 = Math.floor((Math.random()*6));
var rand2 = Math.floor((Math.random()*6));

document.querySelector(".img1").setAttribute("src",imagearray[rand1]);

document.querySelector(".img2").setAttribute("src",imagearray[rand2]);

if(rand1>rand2){
    document.querySelector("h1").innerText = "Player 1 Wins!";
}
else if(rand1 == rand2){
    document.querySelector("h1").innerText  = "Draw";
}
else{
    document.querySelector("h1").innerText = "Player 2 Wins!";
}