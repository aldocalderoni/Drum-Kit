
document.addEventListener("keydown", function (e) {
    makeSound(e.key);
    animatedButton(e.key);
});

for(var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        animatedButton(this.innerHTML);
    });
}

function makeSound(key) {
    var audio;
    var rightKey = 1;
        switch(key) {
            case "w":
                audio = new Audio("./sounds/tom-1.mp3");
                break;
            case "a":
                audio = new Audio("./sounds/tom-2.mp3");
                break;
            case "s":
                audio = new Audio("./sounds/tom-3.mp3");
                break;
            case "d":
                audio = new Audio("./sounds/tom-4.mp3");
                break;
            case "j":
                audio = new Audio("./sounds/snare.mp3");
                break;
            case "k":
                audio = new Audio("./sounds/crash.mp3");
                break;
            case "l":
                audio = new Audio("./sounds/kick-bass.mp3");
                break;
            default: 
                console.log("Wrong Key!");
                rightKey = 0;
                break;
        }
        if(rightKey)
            audio.play();
}

function animatedButton(key) {
    if(key === "w" || key === "a" || key === "s" || key === "d" || key === "j" || key === "k" || key === "l") {
        var aniBu = document.querySelector("." + key);
        aniBu.classList.add("pressed");
        setTimeout(function() {
            aniBu.classList.remove("pressed");
        }, 100);
    }
}