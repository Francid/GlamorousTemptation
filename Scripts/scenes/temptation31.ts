//Temptation Scene 31
module scenes {

    export class temptation31 extends objects.Scene {
        
        // PRIVATE VARIABLES
        private _level31Image: createjs.Bitmap;
        private _aSelection: objects.Button;
        private _bSelection: objects.Button;
        private _backButton: objects.Button;

        constructor() {
            super();
        }

        public start(): void {
            this._level31Image = new createjs.Bitmap("../../Assets/images/DecisionLevel31.png");
            this.addChild(this._level31Image);
            
            // added the A Selection button
            this._aSelection = new objects.Button(
                "AButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 100);
            this.addChild(this._aSelection);
            
            this._aSelection.on("click", this.ASelectionButtonClick, this);
            
             // added the A Selection button
            this._bSelection = new objects.Button(
                "BButton",
                config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 100);
            this.addChild(this._bSelection);
            
            this._bSelection.on("click", this.BSelectionButtonClick, this);
            
             // added the Back button
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 150);
            this.addChild(this._backButton);
            
            this._backButton.on("click", this.BackButtonClick, this);
            
            stage.addChild(this);
            
        }

        public update(): void {

        }
        
        // ASelection Button click listener
        private ASelectionButtonClick(event: createjs.MouseEvent){
            // Change the scenes
            scene = config.Scene.LEVEL41;
            changeScene();
        }
        
        // BSelection button click listener
        private BSelectionButtonClick(event: createjs.MouseEvent){
            // Change the Scene
            scene = config.Scene.LEVEL42;
            changeScene();
        }
        
         private BackButtonClick(event: createjs.MouseEvent){
            scene = config.Scene.LEVEL21;
            changeScene();
        }

    }
}