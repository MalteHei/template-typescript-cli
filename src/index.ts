import { Cli } from './lib/cli.js';
import { LOG } from './lib/logger.js';

(async () => {
    LOG.debug('CLI Parameter:', Cli.option);

    LOG.info('Hello World!');
})();
