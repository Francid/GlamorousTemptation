var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.LEVEL1 = 3;
        Scene.LEVEL21 = 4;
        Scene.LEVEL22 = 5;
        Scene.LEVEL31 = 6;
        Scene.LEVEL32 = 7;
        Scene.LEVEL33 = 8;
        Scene.LEVEL34 = 9;
        Scene.LEVEL41 = 10;
        Scene.LEVEL42 = 11;
        Scene.LEVEL43 = 12;
        Scene.LEVEL44 = 13;
        Scene.LEVEL45 = 14;
        Scene.LEVEL46 = 15;
        Scene.LEVEL47 = 16;
        Scene.LEVEL48 = 17;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 900;
        Screen.HEIGHT = 506;
        Screen.CENTER_X = 450;
        Screen.CENTER_Y = 253;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map