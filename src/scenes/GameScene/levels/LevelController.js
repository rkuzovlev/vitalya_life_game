import { columnsCount, rowsCount } from "../../../config";

import MovableObject from "../objects/MovableObject";

import Wall from "../objects/wall";
import Hero from "../objects/hero";
import Mark from "../objects/mark";
import Movable from "../objects/movable";

const LEVEL_OBJECT_MAPPING = {
    1: Wall,
    2: Hero,
    3: Mark,
    4: Movable,
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
        return this.levelObjects.find(object => object.isPosition(x, y) && !(object instanceof Mark));
    }

    isLevelCompleted(){
        const marks = this.levelObjects.filter(object => object instanceof Mark);
        const movableObjects = this.levelObjects.filter(object => object instanceof MovableObject && !(object instanceof Hero));

        return movableObjects.every(object => {
            const pos = object.getPositions();

            const mark = marks.find(mark => {
                const markPos = mark.getPositions();

                return markPos.x === pos.x && markPos.y === pos.y;
            });

            return !!mark;
        })
    }

    checkMovement(direction){
        const hero = this._findByObject(Hero);

        if (!hero){
            return;
        }

        const heroPositions = hero.getPositions();

        if (direction === DIRECTIONS.UP){
            const nearbyObject = this._findByPos(heroPositions.x, heroPositions.y - 1);
            const nearbyNextObject = this._findByPos(heroPositions.x, heroPositions.y - 2);

            if (!nearbyObject){
                hero.moveUp();

            } else if (nearbyObject instanceof MovableObject && !nearbyNextObject){
                hero.moveUp();
                nearbyObject.moveUp();
            }

            hero.turnUp();

        } else if (direction === DIRECTIONS.DOWN){
            const nearbyObject = this._findByPos(heroPositions.x, heroPositions.y + 1);
            const nearbyNextObject = this._findByPos(heroPositions.x, heroPositions.y + 2);

            if (!nearbyObject){
                hero.moveDown();

            } else if (nearbyObject instanceof MovableObject && !nearbyNextObject){
                hero.moveDown();
                nearbyObject.moveDown();
            }

            hero.turnDown();

        } else if (direction === DIRECTIONS.LEFT){
            const nearbyObject = this._findByPos(heroPositions.x - 1, heroPositions.y);
            const nearbyNextObject = this._findByPos(heroPositions.x - 2, heroPositions.y);

            if (!nearbyObject){
                hero.moveLeft();

            } else if (nearbyObject instanceof MovableObject && !nearbyNextObject){
                hero.moveLeft();
                nearbyObject.moveLeft();
            }

            hero.turnLeft();

        } else if (direction === DIRECTIONS.RIGHT){
            const nearbyObject = this._findByPos(heroPositions.x + 1, heroPositions.y);
            const nearbyNextObject = this._findByPos(heroPositions.x + 2, heroPositions.y);

            if (!nearbyObject){
                hero.moveRight();

            } else if (nearbyObject instanceof MovableObject && !nearbyNextObject){
                hero.moveRight();
                nearbyObject.moveRight();
            }

            hero.turnRight();

        }
    }
}

export default LevelController;
