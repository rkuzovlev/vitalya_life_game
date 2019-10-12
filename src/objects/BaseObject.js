import * as PIXI from "pixi.js";

import { cellDimension } from "../config";

export default class BaseObject {
    constructor(spriteImage, x, y){
        this.sprite = PIXI.Sprite.from(spriteImage);
        this.sprite.anchor.set(0.5);
        this.sprite.x = x * cellDimension + cellDimension / 2;
        this.sprite.y = y * cellDimension + cellDimension / 2;
    }

    moveUp(){
        this.sprite.y -= cellDimension;
    }

    moveDown(){
        this.sprite.y += cellDimension;
    }

    moveLeft(){
        this.sprite.x -= cellDimension;
    }

    moveRight(){
        this.sprite.x += cellDimension;
    }

    turnUp(){
        this.sprite.angle = 0;
    }

    turnDown(){
        this.sprite.angle = 180;
    }

    turnLeft(){
        this.sprite.angle = -90;
    }

    turnRight(){
        this.sprite.angle = 90;
    }
}
