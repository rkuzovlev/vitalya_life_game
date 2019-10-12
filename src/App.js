import * as PIXI from "pixi.js";

import { cellDimension, columnsCount, rowsCount } from "./config";

import Road from "./road";

import LevelController, { DIRECTIONS } from './levels/LevelController';

import level1 from "./levels/level1";
import level2 from "./levels/level2";

const LEVELS = {
    1: level1,
    2: level2,
};

export default class App extends PIXI.Application {
    currentLevelNumber = 0;
    levelController;

    constructor(domId){
        const config = {
            width: cellDimension * columnsCount,
            height: cellDimension * rowsCount,
        };

        super(config);

        this.stage.sortableChildren = true;

        const road = new Road(this);
        this.stage.addChild(road);

        this.levelController = new LevelController(this);

        document.addEventListener('keydown', this.onKeyDown);
        document.getElementById(domId).appendChild(this.view);
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
                console.log('You won!!!!');
            }
        }
    }
}
