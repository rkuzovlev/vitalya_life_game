import * as PIXI from "pixi.js";

import StaticObject from '../StaticObject';

import wallImage from './wall.png';

class Wall extends StaticObject {
    constructor(x, y) {
        const texture = PIXI.Texture.from(wallImage);
        super(texture, x, y, 0);

        this.zIndex = 0;
    }
}

export default Wall;
