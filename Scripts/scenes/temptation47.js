var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Temptation Scene 47
var scenes;
(function (scenes) {
    var temptation47 = (function (_super) {
        __extends(temptation47, _super);
        function temptation47() {
            _super.call(this);
        }
        temptation47.prototype.start = function () {
            this._level47Image = new createjs.Bitmap("../../Assets/images/DecisionLevel47.png");
            this.addChild(this._level47Image);
            // added the Restart button
            this._restartButton = new objects.Button("AButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 150);
            this.addChild(this._restartButton);
            this._restartButton.on("click", this.RestartButtonClick, this);
            // added the Back button
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 150);
            this.addChild(this._backButton);
            this._backButton.on("click", this.BackButtonClick, this);
            stage.addChild(this);
        };
        temptation47.prototype.update = function () {
        };
        // Restart Button click listener
        temptation47.prototype.RestartButtonClick = function (event) {
            // Change the scenes
            scene = config.Scene.MENU;
            changeScene();
        };
        // Back Button click listener
        temptation47.prototype.BackButtonClick = function (event) {
            //Set the Scene to the previous one
            scene = config.Scene.LEVEL34;
            changeScene();
        };
        return temptation47;
    })(objects.Scene);
    scenes.temptation47 = temptation47;
})(scenes || (scenes = {}));
//# sourceMappingURL=temptation47.js.map