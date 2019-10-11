import * as PIXI from "pixi.js";

import { cellDimension, columnsCount, rowsCount } from "./config";

import Road from "./road";
import Hero from "./hero";

import level1 from "./levels/level1";

const levels = [
    level1,
];

export default class App {
    pixiApp = null;
    currentLevelNumber = 0;
    levelObjects = [];
    hero = null;

    constructor(){
        this.pixiApp = new PIXI.Application({
            width: cellDimension * columnsCount,
            height: cellDimension * rowsCount,
        });

        document.addEventListener('keydown', this.onKeyDown);

        const road = new Road(this.pixiApp);

        this.pixiApp.stage.addChild(road.sprite);
    }

    render(domId){
        document.getElementById(domId).appendChild(this.pixiApp.view);
    }

    clearLevel(){
        this.levelObjects.forEach(object => {
            this.pixiApp.stage.removeChild(object.sprite);
        });
        this.hero = null;
    }

    loadLevel(levelNumber){
        this.clearLevel();

        this.currentLevelNumber = levelNumber;

        const level = levels[levelNumber - 1];

        level.forEach(levelObject => {
            const object = new levelObject.Obj(levelObject.x, levelObject.y);

            if (levelObject.Obj === Hero){
                this.hero = object;
            }

            this.levelObjects.push(object);
            this.pixiApp.stage.addChild(object.sprite);
        });
    }

    onKeyDown = event => {
        if (!this.hero){
            return;
        }

        if (event.key === "ArrowUp"){
            this.hero.moveUp();
            this.hero.turnUp()

        } else if (event.key === "ArrowDown"){
            this.hero.moveDown();
            this.hero.turnDown()

        } else if (event.key === "ArrowLeft"){
            this.hero.moveLeft();
            this.hero.turnLeft()

        } else if (event.key === "ArrowRight"){
            this.hero.moveRight();
            this.hero.turnRight()

        }
    }
}
