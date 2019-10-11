import * as PIXI from 'pixi.js'

import roadImage from "./road.png";

class Road {
    constructor(app) {
        const roadTexture = PIXI.Texture.from(roadImage);
        this.sprite = new PIXI.TilingSprite(roadTexture, app.screen.width, app.screen.height);
    }
}

export default Road;
