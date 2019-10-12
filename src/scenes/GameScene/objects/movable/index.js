import * as PIXI from "pixi.js";

import MovableObject from '../MovableObject';

import rabbitImage from './rabbit.png';
import shpatelImage from './shpatel.png';
import teplicaImage from './teplica.png';
import dildoImage from './dildo.png';
import policlinicaImage from './policlinica.png';
import rm_rfImage from './rm-rf.png';
import shurupovertImage from './shurupovert.png';
import clockImage from './clock.png';
import dogImage from './dog.png';
import gantelyaImage from './gantelya.png';
import bankaImage from './banka.png';

const images = [
    rabbitImage,
    shpatelImage,
    teplicaImage,
    dildoImage,
    policlinicaImage,
    rm_rfImage,
    shurupovertImage,
    clockImage,
    dogImage,
    gantelyaImage,
    bankaImage,
];

class Movable extends MovableObject {
    constructor(x, y) {
        const texture = PIXI.Texture.from( images[Math.floor(Math.random() * images.length)] );
        super(texture, x, y);

        this.zIndex = 200;
    }
}

export default Movable;
