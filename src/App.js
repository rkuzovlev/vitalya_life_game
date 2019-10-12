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

        this.pixiApp.stage.sortableChildren = true;

        const road = new Road(this.pixiApp);
        this.pixiApp.stage.addChild(road);

        document.addEventListener('keydown', this.onKeyDown);
    }

    render(domId){
        document.getElementById(domId).appendChild(this.pixiApp.view);
    }

    clearLevel(){
        this.levelObjects.forEach(row => {
            row.forEach(object => {
                this.pixiApp.stage.removeChild(object);
            });
        });


        this.levelObjects = [];
        for (let y = 0; y < rowsCount; y++){
            this.levelObjects[y] = [];
            for (let x = 0; x < columnsCount; x++){
                this.levelObjects[y][x] = null;
            }
        }
        this.hero = null;
    }

    _instantiate(Obj, x, y){
        const object = new Obj(x, y);

        this.levelObjects[y][x] = object;
        this.pixiApp.stage.addChild(object);

        if (Obj === Hero){
            this.hero = object;
        }

        return object;
    }

    loadLevel(levelNumber){
        this.clearLevel();

        this.currentLevelNumber = levelNumber;

        const level = levels[levelNumber];

        for (let y = 0; y < rowsCount; y++){
            for (let x = 0; x < columnsCount; x++){
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
