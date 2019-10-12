import BaseObject from '../BaseObject';

import wallImage from './wall.png';

class Wall extends BaseObject {
    constructor(x, y) {
        super(wallImage, x, y);
    }
}

export default Wall;
