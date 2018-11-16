/* global $ */

//Show
$("#show").click(function() {
    $("img").show();    
});

//Hide    
$("#hide").click(function() {
    $("img").hide();    
});

//Toggle
$("#toggle").click(function() {
    $("img").toggle();
});

//Fade
$("#fadeInOff").click(function() {
   $("img").toggleClass("fade"); 
});

//Hover
$("img").hover(function() {
    $(this).attr("src", "https://akns-images.eonline.com/eol_images/Entire_Site/2013417/rs_1024x759-130517093507-1024.TheOffice3.mh.051713.jpg?fit=inside|900:auto&output-quality=90");
    $(this).attr("alt", "no michael");
}, function() {
    $(this).attr("src", "https://amp.thisisinsider.com/images/5b16ed9a5e48ec1e008b45fb-750-562.jpg");
    $(this).attr("alt", "michael");
});

//Add characters
var characters = ["Andy", "Pam", "Michael", "Ryan", "Oscar", "Phyllis", "etc."];

let i = 0;
$("#addCharacter").click(function() {
    if (i == characters.length - 1) {
        $(this).hide();
    }
    addCharacter(i);
    i++;
});

function addCharacter(i){
        $("ul").append("<li>"+ characters[i] +"</li>")   
}

//Scare
$("#doNotPress").click(function() {
    $("body").prepend(`
    <div style= \"background-color: red; height: 10000px; position: fixed; text-align: center; width: 100%;\">
        <h1 style= \"display: block; color: white; margin: 100px auto;\">BOO</h1>
    </div>
    `)
});