import BaseScene from "../BaseScene";

import WonScene from "../WonScene";

import Road from "./road";
import LevelController, { DIRECTIONS } from "./levels/LevelController";

import level1 from "./levels/level1";
import level2 from "./levels/level2";

const LEVELS = {
    1: level1,
    2: level2,
};

export default class GameScene extends BaseScene {
    road = null;
    currentLevelNumber = 1;
    levelController;

    load(){
        super.load();

        this.road = new Road(this.app);
        this.app.stage.addChild(this.road);

        this.levelController = new LevelController(this.app);

        this.loadLevel(1);
    }

    unload(){
        this.app.stage.removeChild(this.road);

        this.levelController._clearLevel();

        super.unload();
    }

    loadLevel(levelNumber){
        this.currentLevelNumber = levelNumber;

        this.levelController.loadLevel(LEVELS[levelNumber]);
    }

    onKeyDown = event => {
        if (event.key === "ArrowUp"){
            this.levelController.checkMovement(DIRECTIONS.UP);

        } else if (event.key === "ArrowDown"){
            this.levelController.checkMovement(DIRECTIONS.DOWN);

        } else if (event.key === "ArrowLeft"){
            this.levelController.checkMovement(DIRECTIONS.LEFT);

        } else if (event.key === "ArrowRight"){
            this.levelController.checkMovement(DIRECTIONS.RIGHT);

        }

        if (this.levelController.isLevelCompleted()){
            const nextLevel = this.currentLevelNumber + 1;

            if (LEVELS[nextLevel]){
                this.loadLevel(nextLevel);
            } else {
                this.app.loadScene(WonScene);
            }
        }
    }
}
