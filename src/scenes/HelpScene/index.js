import * as PIXI from "pixi.js";

import BaseScene from "../BaseScene";
import GameScene from "../GameScene";

import titleStyles from '../../texts/title';
import regularStyles from '../../texts/regular';

export default class HelpScene extends BaseScene {
    load() {
        super.load();

        this.titleText = new PIXI.Text('Управление', titleStyles);
        this.titleText.x = this.app.screen.width / 2 - this.titleText.width / 2;
        this.titleText.y = 50;

        this.arrowsText = new PIXI.Text('Для управления используй стрелки на клавиатуре', regularStyles);
        this.arrowsText.x = 25;
        this.arrowsText.y = 150;

        this.restartText = new PIXI.Text('Для перезапуска уровня нажми r', regularStyles);
        this.restartText.x = 25;
        this.restartText.y = 200;

        this.helpText = new PIXI.Text('Твоя задача, доставить все "пролемы" до целей, так Виталя может спать спокойно и заниматься своими делами', regularStyles);
        this.helpText.x = 25;
        this.helpText.y = 250;


        this.enterText = new PIXI.Text('Нажми Enter и начни путешествие', titleStyles);
        this.enterText.x = 25;
        this.enterText.y = this.app.screen.height - 65;

        this.app.stage.addChild(this.titleText);
        this.app.stage.addChild(this.arrowsText);
        this.app.stage.addChild(this.restartText);
        this.app.stage.addChild(this.enterText);
        this.app.stage.addChild(this.helpText);
    }

    unload() {
        this.app.stage.removeChild(this.titleText);
        this.app.stage.removeChild(this.arrowsText);
        this.app.stage.removeChild(this.restartText);
        this.app.stage.removeChild(this.enterText);
        this.app.stage.removeChild(this.helpText);

        super.unload();
    }

    onKeyDown = event => {
        if (event.key === "Enter"){
            this.app.loadScene(GameScene);
        }
    }
}
