import * as PIXI from "pixi.js";

import BaseScene from "../BaseScene";

import GameScene from "../GameScene";

export default class WelcomeScene extends BaseScene {
    load() {
        super.load();

        const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontWeight: 'bold',
            fill: '#ffffff',
            wordWrap: true,
            wordWrapWidth: 440,
        });

        this.welcomeText = new PIXI.Text('Basic text in pixi', style);
        this.welcomeText.x = 50;
        this.welcomeText.y = 100;

        this.app.stage.addChild(this.welcomeText);
    }

    unload() {
        this.app.stage.removeChild(this.welcomeText);

        super.unload();
    }

    onKeyDown = event => {
        if (event.key === "Enter"){
            this.app.loadScene(GameScene);
        }
    }
}
