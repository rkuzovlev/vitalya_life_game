import * as PIXI from "pixi.js";

import { cellDimension, columnsCount, rowsCount } from "./config";

import Road from "./road";
import Hero from "./hero";
import Wall from "./wall";

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
        this.levelObjects = [];
        this.hero = null;
    }

    _instantiate(Obj, x, y){
        const object = new Obj(x, y);

        this.levelObjects.push(object);
        this.pixiApp.stage.addChild(object.sprite);

        return object;
    }

    loadLevel(levelNumber){
        this.clearLevel();

        this.currentLevelNumber = levelNumber;

        const level = levels[levelNumber - 1];

        for (let x = 0; x < columnsCount; x++){
            for (let y = 0; y < rowsCount; y++){
                const levelObject = level.find(levelObject => levelObject.x === x && levelObject.y === y);

                if (!levelObject){
                    this._instantiate(Wall, x, y);
                    continue;
                }

                if (levelObject.Obj === null){
                    continue;
                }

                const object = this._instantiate(levelObject.Obj, levelObject.x, levelObject.y);

                if (levelObject.Obj === Hero){
                    this.hero = object;
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
