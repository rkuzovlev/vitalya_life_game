import * as PIXI from "pixi.js";

import { cellDimension } from "../../../config";

export default class BaseObject extends PIXI.Sprite {
    constructor(texture, x, y){
        super(texture);

        this.anchor.set(0.5);
        this.x = x * cellDimension + cellDimension / 2;
        this.y = y * cellDimension + cellDimension / 2;
    }

    isPosition(x, y){
        const pos = this.getPositions();

        return x === pos.x && y === pos.y;
    }

    getPositions(){
        return {
            x: (this.x - cellDimension / 2) / cellDimension,
            y: (this.y - cellDimension / 2) / cellDimension,
        }
    }
}
