import * as PIXI from "pixi.js";

import BaseScene from "../BaseScene";

import titleStyles from '../../texts/title';
import regularStyles from '../../texts/regular';

const text = `Надеюсь тебе понравилось и ты пожертвуешь немного средств в фонд помощи Виталика.
Если ты не знал, то он принимает пожертвоввания не только деньгами.
Конечно же в ход идет криптовалюта, различные железяки для компа (например видеокарта), да и вобще можешь присылать всякий хлам который тебе уже не нужен но он еще может сослужить верную службу Виталику. :pled:`;

export default class WonScene extends BaseScene {
    load() {
        super.load();

        this.titleText = new PIXI.Text('Поздравляю, ты прошел Виталькину жизнь', titleStyles);
        this.titleText.x = this.app.screen.width / 2 - this.titleText.width / 2;
        this.titleText.y = 50;

        this.text = new PIXI.Text(text, regularStyles);
        this.text.x = this.app.screen.width / 2 - this.text.width / 2;
        this.text.y = 150;

        this.app.stage.addChild(this.titleText);
        this.app.stage.addChild(this.text);
    }

    unload() {
        this.app.stage.removeChild(this.titleText);
        this.app.stage.removeChild(this.text);

        super.unload();
    }
}
