import * as PIXI from "pixi.js";

import { cellDimension } from "../config";

export default class BaseObject extends PIXI.Sprite {
    constructor(texture, x, y){
        super(texture);

        this.anchor.set(0.5);
        this.x = x * cellDimension + cellDimension / 2;
        this.y = y * cellDimension + cellDimension / 2;
    }

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
