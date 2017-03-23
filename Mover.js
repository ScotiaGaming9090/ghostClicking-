function Mover(sprite, stage) {
    "use strict";

    // stop the sprite animating just in case
    sprite.stop();


    // ------------------------------------------ public methods
    // Call the function for playing the sprite
    this.startMe = function () {
        sprite.play();
    };



    // Added event listener to stop sprite, also removed stopMe() function
        sprite.addEventListener("click", function () {
        // Once the sprite is clicked, play the Dead function    
        sprite.gotoAndPlay("ghostDead");
        createjs.Sound.play("ghost");
    })

};