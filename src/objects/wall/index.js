import BaseObject from '../BaseObject';

import wallImage from './wall.png';

class Wall extends BaseObject {
    constructor(x, y) {
        super(wallImage, x, y, 0);
    }
}

export default Wall;
