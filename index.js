var random1=Math.floor(Math.random()*6)+1
var path="dice"+random1+".png"
var img="./images/"+path
var img1=document.querySelectorAll("img")[0]
img1.setAttribute("src" , img)

var random2=Math.floor(Math.random()*6)+1
var path2="dice"+random2+".png"
var img2="./images/"+path2
var img3=document.querySelectorAll("img")[1]
img3.setAttribute("src" , img2)

if (random1>random2){
    document.querySelector("h1").innerHTML="Player 1 wins 🥳"
}
else if (random1<random2){
    document.querySelector("h1").innerHTML="Player 2 wins 🥳"
}
else{
    document.querySelector("h1").innerHTML="Draw !😎"
}
