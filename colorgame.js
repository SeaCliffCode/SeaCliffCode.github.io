var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.getElementsByTagName("h1")[0];
var resetButton = document.getElementById("resetGame");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColor(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i<squares.length;i++ ){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click",function(){
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");

colors = generateRandomColor(6);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length;i++ ){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    
}
});



resetButton.addEventListener("click", function(){
//generate all new colrs
colors = generateRandomColor(6);
if(easyBtn.classList.contains("selected")){
colors = generateRandomColor(3);
}
//pick a new random color from array
pickedColor = pickColor();
//change color display
colorDisplay.textContent= pickedColor;
//change colors of square
for (var i = 0; i < squares.length; i++) {
    //add intial colors to squares
    squares[i].style.background = colors[i];

//reset header
h1.style.background = "steelblue";
//reset button text
this.textContent="New Colors";
messageDisplay.textContent = "";
}

});

colorDisplay.textContent= pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add intial colors to squares
    squares[i].style.background = colors[i];

    //add click litseners to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = (this.style.backgroundColor);
        //compare color to picked color
console.log(clickedColor);
console.log(pickedColor);
        if(clickedColor === pickedColor){


        messageDisplay.textContent = "Correct!"; //correct event
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        resetButton.textContent="Play Again? ";
              } 
              
              else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
        
    });
}

function changeColors(color){
    //loop through all squares
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.background = color;    
    }
}

function pickColor(){
    //Picks a random color square from the array of colors
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(n){
    //make array
    var list = [];
    for (var i = 0; i < n; i++) {
        str = "rgb(x, y, z)";
        list.push(str.replace(/x|y|z/gi, function(){
        return Math.floor(Math.random()*256)}
        ));
        
    }
    return list;

}