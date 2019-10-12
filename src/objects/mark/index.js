import * as PIXI from "pixi.js";

import BaseObject from '../BaseObject';

import markImage from './mark.png';

class Mark extends BaseObject {
    constructor(x, y) {
        const texture = PIXI.Texture.from(markImage);
        super(texture, x, y);

        this.zIndex = 200;
    }
}

export default Mark;
