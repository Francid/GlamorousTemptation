var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Temptation Scene 48
var scenes;
(function (scenes) {
    var temptation48 = (function (_super) {
        __extends(temptation48, _super);
        function temptation48() {
            _super.call(this);
        }
        temptation48.prototype.start = function () {
            this._level48Image = new createjs.Bitmap("../../Assets/images/DecisionLevel48.png");
            this.addChild(this._level48Image);
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
        temptation48.prototype.update = function () {
        };
        // Restart Button click listener
        temptation48.prototype.RestartButtonClick = function (event) {
            // Change the scenes
            scene = config.Scene.MENU;
            changeScene();
        };
        // Back Button click listener
        temptation48.prototype.BackButtonClick = function (event) {
            //Set the Scene to the previous one
            scene = config.Scene.LEVEL34;
            changeScene();
        };
        return temptation48;
    })(objects.Scene);
    scenes.temptation48 = temptation48;
})(scenes || (scenes = {}));
//# sourceMappingURL=temptation48.js.map