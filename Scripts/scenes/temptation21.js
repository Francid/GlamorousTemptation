var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Temptation Scene 21
var scenes;
(function (scenes) {
    var temptation21 = (function (_super) {
        __extends(temptation21, _super);
        function temptation21() {
            _super.call(this);
        }
        temptation21.prototype.start = function () {
            this._level21Image = new createjs.Bitmap("../../Assets/images/DecisionLevel21.png");
            this.addChild(this._level21Image);
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
        temptation21.prototype.update = function () {
        };
        // ASelection Button click listener
        temptation21.prototype.ASelectionButtonClick = function (event) {
            // Change the scenes
            scene = config.Scene.LEVEL31;
            changeScene();
        };
        // BSelection button click listener
        temptation21.prototype.BSelectionButtonClick = function (event) {
            // Change the Scene
            scene = config.Scene.LEVEL32;
            changeScene();
        };
        temptation21.prototype.BackButtonClick = function (event) {
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        return temptation21;
    })(objects.Scene);
    scenes.temptation21 = temptation21;
})(scenes || (scenes = {}));
//# sourceMappingURL=temptation21.js.map