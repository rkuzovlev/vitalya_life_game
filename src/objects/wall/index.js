import * as PIXI from "pixi.js";

import BaseObject from '../BaseObject';

import wallImage from './wall.png';

class Wall extends BaseObject {
    constructor(x, y) {
        const texture = PIXI.Texture.from(wallImage);
        super(texture, x, y, 0);

        this.zIndex = 0;
    }
}

export default Wall;
