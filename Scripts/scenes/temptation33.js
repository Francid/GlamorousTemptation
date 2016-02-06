var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Temptation Scene 33
var scenes;
(function (scenes) {
    var temptation33 = (function (_super) {
        __extends(temptation33, _super);
        function temptation33() {
            _super.call(this);
        }
        temptation33.prototype.start = function () {
            this._level33Image = new createjs.Bitmap("../../Assets/images/DecisionLevel33.png");
            this.addChild(this._level33Image);
            // added the A Selection button
            this._aSelection = new objects.Button("AButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._aSelection);
            this._aSelection.on("click", this.ASelectionButtonClick, this);
            // added the A Selection button
            this._bSelection = new objects.Button("BButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._bSelection);
            this._bSelection.on("click", this.BSelectionButtonClick, this);
            // added the Back button
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 150);
            this.addChild(this._backButton);
            this._backButton.on("click", this.BackButtonClick, this);
            stage.addChild(this);
        };
        temptation33.prototype.update = function () {
        };
        // ASelection Button click listener
        temptation33.prototype.ASelectionButtonClick = function (event) {
            // Change the scenes
            scene = config.Scene.LEVEL45;
            changeScene();
        };
        // BSelection button click listener
        temptation33.prototype.BSelectionButtonClick = function (event) {
            // Change the Scene
            scene = config.Scene.LEVEL46;
            changeScene();
        };
        // Back Button Click Listener
        temptation33.prototype.BackButtonClick = function (event) {
            // Set the scene to the previous one
            scene = config.Scene.LEVEL22;
            changeScene();
        };
        return temptation33;
    })(objects.Scene);
    scenes.temptation33 = temptation33;
})(scenes || (scenes = {}));
//# sourceMappingURL=temptation33.js.map