import os from 'os';
import {exec} from 'child_process';

export default class Utils {

    /**
     * Open a url by OS default brower.
     * 
     * @param {string} url The url whitch will be opend
     */
    static openUrl(url) {
        switch(os.platform()) {
            case 'darwin':
                exec('open '+url);
                break;
            case 'win32':
                exec('start ' + url);
                break;
            case 'linux':
                exec('xdg-open', url);
                break;
        }
    }
}

// export default utils = new Utils();
