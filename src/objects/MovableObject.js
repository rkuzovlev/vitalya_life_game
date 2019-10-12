import BaseObject from "./BaseObject";

import { cellDimension } from "../config";

export default class MovableObject extends BaseObject {
    moveUp(){
        this.y -= cellDimension;
    }

    moveDown(){
        this.y += cellDimension;
    }

    moveLeft(){
        this.x -= cellDimension;
    }

    moveRight(){
        this.x += cellDimension;
    }

    turnUp(){
        this.angle = 0;
    }

    turnDown(){
        this.angle = 180;
    }

    turnLeft(){
        this.angle = -90;
    }

    turnRight(){
        this.angle = 90;
    }
}
