/// <reference path = "_reference.ts" />

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var menu: scenes.Menu;
var level1: scenes.temptation1;
var level21: scenes.temptation21;
var level22: scenes.temptation22;
var level31: scenes.temptation31;
var level32: scenes.temptation32;
var level33: scenes.temptation33;
var level34: scenes.temptation34;
var level41: scenes.temptation41;
var level42: scenes.temptation42;
var level43: scenes.temptation43;
var level44: scenes.temptation44;
var level45: scenes.temptation45;
var level46: scenes.temptation46;
var level47: scenes.temptation47;
var level48: scenes.temptation48;

function init(): void {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            break;
        case config.Scene.LEVEL1:
            stage.removeAllChildren();
            level1 = new scenes.temptation1();
            currentScene = level1;
            break;
        case config.Scene.LEVEL21:
            stage.removeAllChildren();
            level21 = new scenes.temptation21();
            currentScene = level21;
            break;
        case config.Scene.LEVEL22:
            stage.removeAllChildren();
            level22 = new scenes.temptation22();
            currentScene = level22;
            break;
        case config.Scene.LEVEL31:
            stage.removeAllChildren();
            level31 = new scenes.temptation31();
            currentScene = level31;
            break;
        case config.Scene.LEVEL32:
            stage.removeAllChildren();
            level32 = new scenes.temptation32();
            currentScene = level32;
            break;
        case config.Scene.LEVEL33:
            stage.removeAllChildren();
            level33 = new scenes.temptation33();
            currentScene = level33;
            break;
        case config.Scene.LEVEL34:
            stage.removeAllChildren();
            level34 = new scenes.temptation34();
            currentScene = level34;
            break;
        case config.Scene.LEVEL41:
            stage.removeAllChildren();
            level41 = new scenes.temptation41();
            currentScene = level41;
            break;
        case config.Scene.LEVEL42:
            stage.removeAllChildren();
            level42 = new scenes.temptation42();
            currentScene = level42;
            break;
        case config.Scene.LEVEL43:
            stage.removeAllChildren();
            level43 = new scenes.temptation43();
            currentScene = level43;
            break;
        case config.Scene.LEVEL44:
            stage.removeAllChildren();
            level44 = new scenes.temptation44();
            currentScene = level44;
            break;
        case config.Scene.LEVEL45:
            stage.removeAllChildren();
            level45 = new scenes.temptation45();
            currentScene = level45;
            break;
        case config.Scene.LEVEL46:
            stage.removeAllChildren();
            level46 = new scenes.temptation46();
            currentScene = level46;
            break;
        case config.Scene.LEVEL47:
            stage.removeAllChildren();
            level47 = new scenes.temptation47();
            currentScene = level47;
            break;
        case config.Scene.LEVEL48:
            stage.removeAllChildren();
            level48 = new scenes.temptation48();
            currentScene = level48;
            break;

    }

    console.log(currentScene.numChildren);
}