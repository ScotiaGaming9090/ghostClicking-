(function() {
    "use strict";

    window.addEventListener("load", onInit);

    // game variables
    var stage = null;
    var canvas = null;
    var timer = 0;

    // frame rate of game
    var frameRate = 24;

    // game objects
    var assetManager = null;
    var introScreen = null;
    var contentScreen = null;
    var endScreen = null;
    var gameScreen = null;
    var gameOverScreen = null;
    
    // timer variables
    var timer = null;
    var countDown = 60;

    // game objects
    var txtTimer = null;
    
    // ------------------------------------------------------------ private methods
    // TIMER
    function startTimer() {
        timer = window.setInterval(onTimerUpdate, 1000);
    }
    
    function stopTimer() {
        window.clearInterval(timer);
        countDown = 2;
        timer = null;
    }

    
    
    // ------------------------------------------------------------ event handlers
	
	function onTimerUpdate() {
		timer = timer + 1;
		document.getElementById("time").innerHTML=timer;
	}
	
	function onInit() {
        console.log(">> initializing");

        // get reference to canvas
        canvas = document.getElementById("stage");
        // set canvas to as wide/high as the browser window
        canvas.width = 300;
        canvas.height = 300;
        // create stage object
        stage = new createjs.Stage(canvas);
		stage.enableMouseOver(10);

        // construct the assetManager to load the assets
        assetManager = new AssetManager(stage);
        stage.addEventListener("onAllAssetsLoaded", onReady);
        // load the assets!
        assetManager.loadAssets(manifest);
        
        
        // startup the ticker
        createjs.Ticker.setFPS(frameRate);
        createjs.Ticker.addEventListener("tick", onTick);
    }
    

    function onReady(e) {
        console.log(">> adding sprites to game");
        stage.removeEventListener("onAllAssetsLoaded", onReady);

        // construct our game objects!
        introScreen = new IntroScreen(assetManager, stage);
        introScreen.showMe();
        contentScreen = new ContentScreen(assetManager, stage);
        gameScreen = new GameScreen(assetManager, stage);
        
        stage.addEventListener("introFinished", onIntroFinished);
        stage.addEventListener("contentFinished", onContentFinished);
        stage.addEventListener("playFinished", onPlayFinished);
        
        stage.addEventListener("introPrevious", onIntroPrevious);
        stage.addEventListener("contentPrevious", onContentPrevious);
        stage.addEventListener("playPrevious", onPlayPrevious);
        
//        
//        // TIMER
//        txtTimer = new createjs.BitmapText(String(countDown), assetManager.getSpriteSheet("uiAssets"));
//        txtTimer.letterSpacing = 2;
//        txtTimer.x = 50;
//        txtTimer.y = 50;
//        stage.addChild(txtTimer);
        
        console.log(">> game ready");
    }
    
//        function onTimerUpdate(e) {
//        console.log("time!");
//        countDown--;
//        txtTimer.text = String(countDown);
//        // detect if game over
//        if (countDown == 0) {
//            //feedback.gotoAndStop("messageLoser");
//            stage.addChild(GameScreen);
//            //guessController.setupMe();
//            stopTimer();
//        } else if (countDown <= 10) {
//            //createjs.Sound.play("timeSound");
//        }
//    }
    
    
    function onIntroFinished(e){
        introScreen.hideMe();
        contentScreen.showMe();
        createjs.Sound.play("boing");
        console.log("boing");
    }
    
    function onContentFinished(e){
        contentScreen.hideMe();
        gameScreen.showMe();
        createjs.Sound.play("boing");
        console.log("boing");
        // TIMER
//        if (timer == null) startTimer();
    }
    
    function onPlayFinished(e){
        gameScreen.hideMe();
        gameOverScreen.showMe();
        createjs.Sound.play("boing");
        console.log("boing");
    }

     function onIntroPrevious(e){
        introScreen.hideMe();
        gameScreen.showMe();
        createjs.Sound.play("boing");
        console.log("boing");
    }
    
        function onContentPrevious(e){
        contentScreen.hideMe();
        introScreen.showMe();
        createjs.Sound.play("boing");
        console.log("boing");  
    }
    
    function onPlayPrevious(e){
        gameScreen.hideMe();
        introScreen.showMe();
        createjs.Sound.play("boing");
    }
    
    
    function onTick(e) {
        // TESTING FPS
        document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();

        // put your other stuff here!
        // ...

        // update the stage!
        stage.update();
    }

})();
