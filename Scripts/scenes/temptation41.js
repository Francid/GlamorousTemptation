var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Temptation Scene 41
var scenes;
(function (scenes) {
    var temptation41 = (function (_super) {
        __extends(temptation41, _super);
        function temptation41() {
            _super.call(this);
        }
        temptation41.prototype.start = function () {
            this._level41Image = new createjs.Bitmap("../../Assets/images/DecisionLevel41.png");
            this.addChild(this._level41Image);
            // added the A Selection button
            this._restartButton = new objects.Button("AButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._restartButton);
            this._restartButton.on("click", this.RestartButtonClick, this);
            // added the Back button
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 150);
            this.addChild(this._backButton);
            this._backButton.on("click", this.BackButtonClick, this);
            stage.addChild(this);
        };
        temptation41.prototype.update = function () {
        };
        // ASelection Button click listener
        temptation41.prototype.RestartButtonClick = function (event) {
            // Change the scenes
            scene = config.Scene.MENU;
            changeScene();
        };
        // Back Button click listener
        temptation41.prototype.BackButtonClick = function (event) {
            //Set the Scene to the previous one
            scene = config.Scene.LEVEL31;
            changeScene();
        };
        return temptation41;
    })(objects.Scene);
    scenes.temptation41 = temptation41;
})(scenes || (scenes = {}));
//# sourceMappingURL=temptation41.js.map