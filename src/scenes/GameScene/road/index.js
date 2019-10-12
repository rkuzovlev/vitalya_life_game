import * as PIXI from 'pixi.js'

import roadImage from "./road.png";

class Road extends PIXI.TilingSprite {
    constructor(app) {
        const roadTexture = PIXI.Texture.from(roadImage);
        super(roadTexture, app.screen.width, app.screen.height);
    }
}

export default Road;
