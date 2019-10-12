import * as PIXI from "pixi.js";

import MovableObject from '../MovableObject';

import rabbitImage from './rabbit.png';

class Rabbit extends MovableObject {
    constructor(x, y) {
        const texture = PIXI.Texture.from(rabbitImage);
        super(texture, x, y);

        this.zIndex = 100;
    }
}

export default Rabbit;
