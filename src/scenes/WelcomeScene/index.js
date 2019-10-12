import * as PIXI from "pixi.js";

import BaseScene from "../BaseScene";
import HelpScene from "../HelpScene";

import titleStyles from '../../texts/title';
import regularStyles from '../../texts/regular';

const text = `Ну здравствуй дорогой друг, надеюсь ты знаешь куда ты зашел. 
Здесь ты найдешь только боль и разочарование пронизываюшее вдоль и поперек Виталькину жизнь.
Надесь после прохождения игры ты не получишь психического расстройства.
В данной игре ты увидишь множество отсылок и внутренних переживаний, начиная от музыкального сопровождения и до объектов найденых в игре.
Усядься в своем кресле, налей успокаивающий чай, и почувствую атмосферу :pled:

Виталька, привет :five:`;

export default class WelcomeScene extends BaseScene {
    load() {
        super.load();

        this.titleText = new PIXI.Text('Vitalya\'s life game', titleStyles);
        this.titleText.x = this.app.screen.width / 2 - this.titleText.width / 2;
        this.titleText.y = 50;

        this.welcomeText = new PIXI.Text(text, regularStyles);
        this.welcomeText.x = this.app.screen.width / 2 - this.welcomeText.width / 2;
        this.welcomeText.y = 150;

        this.enterText = new PIXI.Text('Нажми Enter и продолжим', titleStyles);
        this.enterText.x = 25;
        this.enterText.y = this.app.screen.height - 65;

        this.app.stage.addChild(this.titleText);
        this.app.stage.addChild(this.welcomeText);
        this.app.stage.addChild(this.enterText);
    }

    unload() {
        this.app.stage.removeChild(this.titleText);
        this.app.stage.removeChild(this.welcomeText);
        this.app.stage.removeChild(this.enterText);

        super.unload();
    }

    onKeyDown = event => {
        if (event.key === "Enter"){
            this.app.loadScene(HelpScene);
        }
    }
}
