var num = document.querySelectorAll(".key").length;
for(var i = 0; i<num; i++)
{
    document.querySelectorAll(".key")[i].addEventListener("click", function(){
        var switcher = this.innerHTML;
        play(switcher);
    });
}
document.addEventListener("keydown", function(event){
    play(event.key);
});
function play(switcher)
{
    switch(switcher){
        case "s":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "r":
                var audio1 = new Audio("sounds/kick-bass.mp3");
                audio1.play();
                break;
        case "g":
                var audio2 = new Audio("sounds/snare.mp3");
                audio2.play();
                break;
        case "m":
                var audio3 = new Audio("sounds/tom-1.mp3");
                audio3.play();
                break;
        case "p":
                var audio4 = new Audio("sounds/tom-2.mp3");
                audio4.play();
                break;
        case "d":
                var audio5 = new Audio("sounds/tom-3.mp3");
                audio5.play();
                break;
        case "n":
                var audio6 = new Audio("sounds/tom-4.mp3");
                audio6.play();
                break;
    }    
}