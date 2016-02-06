var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Temptation Scene 32
var scenes;
(function (scenes) {
    var temptation32 = (function (_super) {
        __extends(temptation32, _super);
        function temptation32() {
            _super.call(this);
        }
        temptation32.prototype.start = function () {
            this._level32Image = new createjs.Bitmap("../../Assets/images/DecisionLevel32.png");
            this.addChild(this._level32Image);
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
        temptation32.prototype.update = function () {
        };
        // ASelection Button click listener
        temptation32.prototype.ASelectionButtonClick = function (event) {
            // Change the scenes
            scene = config.Scene.LEVEL43;
            changeScene();
        };
        // BSelection button click listener
        temptation32.prototype.BSelectionButtonClick = function (event) {
            // Change the Scene
            scene = config.Scene.LEVEL44;
            changeScene();
        };
        temptation32.prototype.BackButtonClick = function (event) {
            scene = config.Scene.LEVEL21;
            changeScene();
        };
        return temptation32;
    })(objects.Scene);
    scenes.temptation32 = temptation32;
})(scenes || (scenes = {}));
//# sourceMappingURL=temptation32.js.map