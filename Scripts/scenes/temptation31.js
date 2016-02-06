var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Temptation Scene 31
var scenes;
(function (scenes) {
    var temptation31 = (function (_super) {
        __extends(temptation31, _super);
        function temptation31() {
            _super.call(this);
        }
        temptation31.prototype.start = function () {
            this._level31Image = new createjs.Bitmap("../../Assets/images/DecisionLevel31.png");
            this.addChild(this._level31Image);
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
        temptation31.prototype.update = function () {
        };
        // ASelection Button click listener
        temptation31.prototype.ASelectionButtonClick = function (event) {
            // Change the scenes
            scene = config.Scene.LEVEL41;
            changeScene();
        };
        // BSelection button click listener
        temptation31.prototype.BSelectionButtonClick = function (event) {
            // Change the Scene
            scene = config.Scene.LEVEL42;
            changeScene();
        };
        temptation31.prototype.BackButtonClick = function (event) {
            scene = config.Scene.LEVEL21;
            changeScene();
        };
        return temptation31;
    })(objects.Scene);
    scenes.temptation31 = temptation31;
})(scenes || (scenes = {}));
//# sourceMappingURL=temptation31.js.map