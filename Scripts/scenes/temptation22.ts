//Temptation Scene 22
module scenes {

    export class temptation22 extends objects.Scene {
        
        // PRIVATE VARIABLES
        private _level22Image: createjs.Bitmap;
        private _aSelection: objects.Button;
        private _bSelection: objects.Button;
        private _backButton: objects.Button;

        constructor() {
            super();
        }

        public start(): void {
            this._level22Image = new createjs.Bitmap("../../Assets/images/DecisionLevel22.png");
            this.addChild(this._level22Image);
            
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
            scene = config.Scene.LEVEL33;
            changeScene();
        }
        
        // BSelection button click listener
        private BSelectionButtonClick(event: createjs.MouseEvent){
            // Change the Scene
            scene = config.Scene.LEVEL34;
            changeScene();
        }
        
        // Back Button click listener
         private BackButtonClick(event: createjs.MouseEvent){
            //Set the Scene to the previous one
            scene = config.Scene.LEVEL1;
            changeScene();
        }
    }
}