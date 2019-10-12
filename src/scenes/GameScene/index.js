import * as PIXI from "pixi.js";

import BaseScene from "../BaseScene";

import WonScene from "../WonScene";

import Road from "./road";
import LevelController, { DIRECTIONS } from "./levels/LevelController";

import regularStyles from "../../texts/regular";

import level1 from "./levels/level1";
import level2 from "./levels/level2";
import level3 from "./levels/level3";
import level4 from "./levels/level4";
import level5 from "./levels/level5";
import level6 from "./levels/level6";
import level7 from "./levels/level7";
import level8 from "./levels/level8";
import level9 from "./levels/level9";
import level10 from "./levels/level10";

const LEVELS = {
    1: level1,
    2: level2,
    3: level3,
    4: level4,
    5: level5,
    6: level6,
    7: level7,
    8: level8,
    9: level9,
    10: level10,
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

        this.levelText = new PIXI.Text("", regularStyles);
        this.levelText.x = 25;
        this.levelText.y = 25;
        this.levelText.zIndex = 100;

        this.reloadLevelText = new PIXI.Text("R - restart level", regularStyles);
        this.reloadLevelText.x = this.app.screen.width - 25 - this.reloadLevelText.width;
        this.reloadLevelText.y = 25;
        this.reloadLevelText.zIndex = 100;

        this.app.stage.addChild(this.levelText);
        this.app.stage.addChild(this.reloadLevelText);

        this.loadLevel(1);
    }

    unload(){
        this.app.stage.removeChild(this.road);
        this.app.stage.removeChild(this.levelText);
        this.app.stage.removeChild(this.reloadLevelText);

        this.levelController._clearLevel();

        super.unload();
    }

    loadLevel(levelNumber){
        this.currentLevelNumber = levelNumber;

        this.levelText.text = "Level " + levelNumber;

        this.levelController.loadLevel(LEVELS[levelNumber]);
    }

    reloadLevel(){
        this.loadLevel(this.currentLevelNumber);
    }

    onKeyDown = event => {
        if (event.key === "r" || event.key === "R" || event.key === "к" || event.key === "К"){
            return this.reloadLevel();
        }

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
