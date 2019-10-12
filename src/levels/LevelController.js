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

    constructor(app) {
        this.app = app;
    }

    _clearLevel(){
        this.levelObjects.forEach(object => {
            this.app.stage.removeChild(object);
        });

        this.levelObjects = [];
    }

    _instantiate(Obj, x, y){
        const object = new Obj(x, y);

        this.levelObjects.push(object);
        this.app.stage.addChild(object);
    }

    loadLevel(level){
        this._clearLevel();

        for (let y = 0; y < rowsCount; y++){
            for (let x = 0; x < columnsCount; x++){
                const levelObject = LEVEL_OBJECT_MAPPING[level[y][x]];

                if (levelObject){
                    this._instantiate(levelObject, x, y);
                }
            }
        }
    }

    _findByObject(Obj){
        return this.levelObjects.find(object => object instanceof Obj);
    }

    _findByPos(x, y){
        return this.levelObjects.find(object => object.isPosition(x, y));
    }

    checkMovement(direction){
        const hero = this._findByObject(Hero);

        if (!hero){
            return;
        }

        const heroPositions = hero.getPositions();

        if (direction === DIRECTIONS.UP){
            const nearbyObject = this._findByPos(heroPositions.x, heroPositions.y - 1);
            if (!nearbyObject || nearbyObject instanceof Mark){
                hero.moveUp();
            }

            hero.turnUp()

        } else if (direction === DIRECTIONS.DOWN){
            const nearbyObject = this._findByPos(heroPositions.x, heroPositions.y + 1);
            if (!nearbyObject || nearbyObject instanceof Mark){
                hero.moveDown();
            }

            hero.turnDown()

        } else if (direction === DIRECTIONS.LEFT){
            const nearbyObject = this._findByPos(heroPositions.x - 1, heroPositions.y);
            if (!nearbyObject || nearbyObject instanceof Mark){
                hero.moveLeft();
            }

            hero.turnLeft();

        } else if (direction === DIRECTIONS.RIGHT){
            const nearbyObject = this._findByPos(heroPositions.x + 1, heroPositions.y);
            if (!nearbyObject || nearbyObject instanceof Mark){
                hero.moveRight();
            }

            hero.turnRight();

        }
    }
}

export default LevelController;
