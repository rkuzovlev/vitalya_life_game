import * as PIXI from "pixi.js";

import BaseObject from '../BaseObject';

import rabbitImage from './rabbit.png';

class Rabbit extends BaseObject {
    constructor(x, y) {
        const texture = PIXI.Texture.from(rabbitImage);
        super(texture, x, y, 100);

        this.zIndex = 100;
    }
}

export default Rabbit;
