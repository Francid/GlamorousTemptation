//Temptation Scene 42
module scenes {

    export class temptation42 extends objects.Scene {
        
        // PRIVATE VARIABLES
        private _level42Image: createjs.Bitmap;
        private _restartButton: objects.Button;
        private _backButton: objects.Button;

        constructor() {
            super();
        }

        public start(): void {
            this._level42Image = new createjs.Bitmap("../../Assets/images/DecisionLevel42.png");
            this.addChild(this._level42Image);
            
            // added the A Selection button
            this._restartButton = new objects.Button(
                "AButton",
                config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 150);
            this.addChild(this._restartButton);
            
            this._restartButton.on("click", this.RestartButtonClick, this);
            
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
        
        // Restart Button click listener
        private RestartButtonClick(event: createjs.MouseEvent){
            // Change the scenes
            scene = config.Scene.MENU;
            changeScene();
        }
        
        
        // Back Button click listener
        private BackButtonClick(event: createjs.MouseEvent){
            //Set the Scene to the previous one
            scene = config.Scene.LEVEL31;
            changeScene();
        }

    }
}