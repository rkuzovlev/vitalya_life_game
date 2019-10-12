import * as PIXI from "pixi.js";

import { cellDimension, columnsCount, rowsCount } from "./config";

export default class App extends PIXI.Application {
    currentScene = null;

    constructor(domId){
        const config = {
            width: cellDimension * columnsCount,
            height: cellDimension * rowsCount,
        };

        super(config);

        this.stage.sortableChildren = true;

        document.addEventListener('keydown', this.onKeyDown);
        document.getElementById(domId).appendChild(this.view);
    }

    loadScene(Scene){
        if (this.currentScene){
            this.currentScene.unload();
        }

        this.currentScene = new Scene(this);
        this.currentScene.load()
    }

    onKeyDown = event => {
        if (this.currentScene.onKeyDown){
            this.currentScene.onKeyDown(event);
        }
    }
}
