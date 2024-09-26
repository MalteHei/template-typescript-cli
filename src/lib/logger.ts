import { Cli } from './cli.js';

/** writes everything to stderr */
const log = (scope: string, ...args: unknown[]): void => console.error(
    new Date().toISOString(),
    `[${scope}]`,
    ...args
);

export const LOG = {
    debug: (...args: unknown[]) => {
        if (Cli.option.VERBOSE) {
            log('DEBUG', ...args);
        }
    },
    info: (...args: unknown[]) => {
        log('INFO', ...args);
    },
    warn: (...args: unknown[]) => {
        log('WARN', ...args);
    },
    error: (...args: unknown[]) => {
        log('ERROR', ...args);
    },
};
