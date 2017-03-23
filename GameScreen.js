var GameScreen = function(assetManager, stage) {
    // On this screen the player has exactly five seconds to beat the clock
    "use strict";
    
    // custom event for next button
    var eventScreenComplete = new createjs.Event("playFinished");
    var eventScreenPrevious = new createjs.Event("playPrevious");
    // construct container to hold all sprites of screen
    var screen = new createjs.Container();
    
    
    // add background to screen
    var background = assetManager.getSprite("uiAssets");
    background.gotoAndStop("gameScreen");
    screen.addChild(background);
    
    // construct hitspot sprite
    var hitAreaSprite = assetManager.getSprite("uiAssets");
    
    var ghost1,ghost2,ghost3,ghost4,ghost5,ghost6,ghost7,ghost8 = null;
    var ghostMover1,ghostMover2,ghostMover3,ghostMover4,ghostMover5,ghostMover6,ghostMover7,ghostMover8 = null;
    

    
    // add quit button
    var btnQuit = assetManager.getSprite("uiAssets");
    btnQuit.gotoAndStop("previousUp");
    btnQuit.x = 0;
    btnQuit.y = 270;
    btnQuit.buttonHelper = new createjs.ButtonHelper(btnQuit, "quitUp", "quitOver", "quitOver", false, hitAreaSprite, "hitArea");
    btnQuit.addEventListener("click",onQuit);
    screen.addChild(btnQuit);
    
    // ROW ONE 
    ghost1 = assetManager.getSprite("uiAssets");
    ghost1.x = 10;
    ghost1.y = 10;
    ghost1.gotoAndStop("ghostAlive");
    // ADDED TO THE STAGE!!!!!
    screen.addChild(ghost1);
    ghostMover1 = new Mover(ghost1,stage);
    ghostMover1.startMe();

    ghost2 = assetManager.getSprite("uiAssets");
    ghost2.x = 80;
    ghost2.y = 10;
    ghost2.gotoAndStop("ghostAlive");
    // ADDED TO THE STAGE!!!!!
    screen.addChild(ghost2);
    ghostMover2 = new Mover(ghost2,stage);
    ghostMover2.startMe();

    ghost3 = assetManager.getSprite("uiAssets");
    ghost3.x = 150;
    ghost3.y = 10;
    ghost3.gotoAndStop("ghostAlive");
    // ADDED TO THE STAGE!!!!!
    screen.addChild(ghost3);
    ghostMover3 = new Mover(ghost3,stage);
    ghostMover3.startMe();

    ghost4 = assetManager.getSprite("uiAssets");
    ghost4.x = 220;
    ghost4.y = 10;
    ghost4.gotoAndStop("ghostAlive");
    // ADDED TO THE STAGE!!!!!
    screen.addChild(ghost4);
    ghostMover4 = new Mover(ghost4,stage);
    ghostMover4.startMe();
    
    // ROW TWO
    ghost5 = assetManager.getSprite("uiAssets");
    ghost5.x = 10;
    ghost5.y = 80;
    ghost5.gotoAndStop("ghostAlive");
    // ADDED TO THE STAGE!!!!!
    screen.addChild(ghost5);
    ghostMover2 = new Mover(ghost5,stage);
    ghostMover2.startMe();

    ghost2 = assetManager.getSprite("uiAssets");
    ghost2.x = 80;
    ghost2.y = 80;
    ghost2.gotoAndStop("ghostAlive");
    // ADDED TO THE STAGE!!!!!
    screen.addChild(ghost2);
    ghostMover2 = new Mover(ghost2,stage);
    ghostMover2.startMe();

    ghost3 = assetManager.getSprite("uiAssets");
    ghost3.x = 150;
    ghost3.y = 80;
    ghost3.gotoAndStop("ghostAlive");
    // ADDED TO THE STAGE!!!!!
    screen.addChild(ghost3);
    ghostMover3 = new Mover(ghost3,stage);
    ghostMover3.startMe();

    ghost4 = assetManager.getSprite("uiAssets");
    ghost4.x = 220;
    ghost4.y = 80;
    ghost4.gotoAndStop("ghostAlive");
    // ADDED TO THE STAGE!!!!!
    screen.addChild(ghost4);
    ghostMover4 = new Mover(ghost4,stage);
    ghostMover4.startMe();
    
    // ROW THREE
    ghost5 = assetManager.getSprite("uiAssets");
    ghost5.x = 10;
    ghost5.y = 150;
    ghost5.gotoAndStop("ghostAlive");
    // ADDED TO THE STAGE!!!!!
    screen.addChild(ghost5);
    ghostMover2 = new Mover(ghost5,stage);
    ghostMover2.startMe();

    ghost2 = assetManager.getSprite("uiAssets");
    ghost2.x = 80;
    ghost2.y = 150;
    ghost2.gotoAndStop("ghostAlive");
    // ADDED TO THE STAGE!!!!!
    screen.addChild(ghost2);
    ghostMover2 = new Mover(ghost2,stage);
    ghostMover2.startMe();

    ghost3 = assetManager.getSprite("uiAssets");
    ghost3.x = 150;
    ghost3.y = 150;
    ghost3.gotoAndStop("ghostAlive");
    // ADDED TO THE STAGE!!!!!
    screen.addChild(ghost3);
    ghostMover3 = new Mover(ghost3,stage);
    ghostMover3.startMe();

    ghost4 = assetManager.getSprite("uiAssets");
    ghost4.x = 220;
    ghost4.y = 150;
    ghost4.gotoAndStop("ghostAlive");
    // ADDED TO THE STAGE!!!!!
    screen.addChild(ghost4);
    ghostMover4 = new Mover(ghost4,stage);
    ghostMover4.startMe();
    
        
    function onQuit(e){
        console.log("clicked on prev!")
        // telling the world the prev button has been clicked!
        stage.dispatchEvent(eventScreenPrevious);
    }
    

    
    
    // ---------------------------------- public methods
    this.showMe = function() {
        // anything else that needs to be done when the screen is shown
        // ...
        stage.addChild(screen);
        //stage.addChild(ghost1)
    }
    
    this.hideMe = function() {
        stage.removeChild(screen);
       
    } 
    
    function onTick(e) {

		ghostMover1.updateMe();

		// update the stage!
		stage.update();
	}

    
    
    
};