import * as PIXI from "pixi.js";

import BaseObject from "../BaseObject";

import heroImage from './hero.png';

class Hero extends BaseObject {
    constructor(x, y) {
        const texture = PIXI.Texture.from(heroImage);
        super(texture, x, y);

        this.zIndex = 100;
    }
}

export default Hero;
