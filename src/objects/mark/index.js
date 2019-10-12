import BaseObject from '../BaseObject';

import markImage from './mark.png';

class Mark extends BaseObject {
    constructor(x, y) {
        super(markImage, x, y, 200);
    }
}

export default Mark;
