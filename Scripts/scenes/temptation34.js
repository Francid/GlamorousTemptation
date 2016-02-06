var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Temptation Scene 34
var scenes;
(function (scenes) {
    var temptation34 = (function (_super) {
        __extends(temptation34, _super);
        function temptation34() {
            _super.call(this);
        }
        temptation34.prototype.start = function () {
            this._level34Image = new createjs.Bitmap("../../Assets/images/DecisionLevel34.png");
            this.addChild(this._level34Image);
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
        temptation34.prototype.update = function () {
        };
        // ASelection Button click listener
        temptation34.prototype.ASelectionButtonClick = function (event) {
            // Change the scenes
            scene = config.Scene.LEVEL47;
            changeScene();
        };
        // BSelection button click listener
        temptation34.prototype.BSelectionButtonClick = function (event) {
            // Change the Scene
            scene = config.Scene.LEVEL48;
            changeScene();
        };
        // Back Button click listener
        temptation34.prototype.BackButtonClick = function (event) {
            //Set the Scene to the previous one
            scene = config.Scene.LEVEL22;
            changeScene();
        };
        return temptation34;
    })(objects.Scene);
    scenes.temptation34 = temptation34;
})(scenes || (scenes = {}));
//# sourceMappingURL=temptation34.js.map