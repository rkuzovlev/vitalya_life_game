import * as PIXI from "pixi.js";

import MovableObject from "../MovableObject";

import heroImage from './hero.png';

class Hero extends MovableObject {
    constructor(x, y) {
        const texture = PIXI.Texture.from(heroImage);
        super(texture, x, y);

        this.zIndex = 100;
    }
}

export default Hero;
