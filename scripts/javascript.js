console.log("My name is Pascal");
let name='Pascal';
var nightmode=document.getElementById("darkmode");
nightmode.addEventListener('click',switch_dark);
var bouton=document.getElementById("btn");


function switch_dark()
{
    var style=document.getElementById("principal");
    var picture=document.querySelector("img#darkmode");
    if(style.href=="style/dark.css")
    {
        style.href="style/style.css";
        picture.src="img/night-mode.png";
    }
    else
    {
        style.href="style/dark.css";
        picture.src="img/dark-mode.png";
        
    }
   
}
bouton.addEventListener('click',clicked);
function clicked()
{
    alert("You haved clicked on the button");
}
alert(name);