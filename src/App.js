import * as PIXI from "pixi.js";

import { cellDimension, columnsCount, rowsCount } from "./config";

import Road from "./road";
import Hero from "./objects/hero";
import Wall from "./objects/wall";
import Mark from "./objects/mark";
import Rabbit from "./objects/rabbit";

import level1 from "./levels/level1";
import level2 from "./levels/level2";

const levels = {
    1: level1,
    2: level2,
};

const levelObjectMapping = {
    1: Wall,
    2: Hero,
    3: Mark,
    4: Rabbit,
};

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
        this.levelObjects = [];
        this.hero = null;
    }

    _instantiate(Obj, x, y){
        const object = new Obj(x, y);

        this.levelObjects.push(object);
        this.pixiApp.stage.addChild(object.sprite);

        if (Obj === Hero){
            this.hero = object;
        }

        return object;
    }

    loadLevel(levelNumber){
        this.clearLevel();

        this.currentLevelNumber = levelNumber;

        const level = levels[levelNumber];

        for (let x = 0; x < columnsCount; x++){
            for (let y = 0; y < rowsCount; y++){
                const levelObject = levelObjectMapping[level[y][x]];

                if (levelObject){
                    this._instantiate(levelObject, x, y);
                }
            }
        }
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
