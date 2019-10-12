import { columnsCount, rowsCount } from "../config";

import Wall from "../objects/wall";
import Hero from "../objects/hero";
import Mark from "../objects/mark";
import Rabbit from "../objects/rabbit";

const LEVEL_OBJECT_MAPPING = {
    1: Wall,
    2: Hero,
    3: Mark,
    4: Rabbit,
};

export const DIRECTIONS = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4,
};

class LevelController {
    levelObjects = [];
    app = null;
    hero = null;

    constructor(app) {
        this.app = app;
    }

    clearLevel(){
        this.levelObjects.forEach(row => {
            row.forEach(object => {
                this.app.stage.removeChild(object);
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
        this.app.stage.addChild(object);

        if (Obj === Hero){
            this.hero = object;
        }

        return object;
    }

    loadLevel(level){
        this.clearLevel();

        for (let y = 0; y < rowsCount; y++){
            for (let x = 0; x < columnsCount; x++){
                const levelObject = LEVEL_OBJECT_MAPPING[level[y][x]];

                if (levelObject){
                    this._instantiate(levelObject, x, y);
                }
            }
        }
    }

    checkMovement(direction){
        if (direction === DIRECTIONS.UP){
            this.hero.moveUp();
            this.hero.turnUp()

        } else if (direction === DIRECTIONS.DOWN){
            this.hero.moveDown();
            this.hero.turnDown()

        } else if (direction === DIRECTIONS.LEFT){
            this.hero.moveLeft();
            this.hero.turnLeft()

        } else if (direction === DIRECTIONS.RIGHT){
            this.hero.moveRight();
            this.hero.turnRight()

        }
    }
}

export default LevelController;
