import * as PIXI from "pixi.js";

import { cellDimension, columnsCount } from "../config";

export default new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 26,
    fill: '#ffffff',
    wordWrap: true,
    wordWrapWidth: columnsCount * cellDimension - 50
});
