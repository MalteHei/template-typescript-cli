import { Command } from 'commander';
import * as dotenv from 'dotenv';
const pkgJson = require('../../package.json');

interface CliOptions {
    VERBOSE: boolean;
}

export class Cli {
    private static readonly DEFAULT = {
    };

    private static readonly CLI = new Command().name(pkgJson.name).description(pkgJson.description).version(pkgJson.version)
        .option('-v, --verbose', 'enable verbose output');

    private static hasCliBeenParsed = false;

    private static parseCli(): void {
        if (this.hasCliBeenParsed) {
            return;
        }

        dotenv.config();
        this.CLI.parse();
        this.hasCliBeenParsed = true;
    }

    public static get option(): CliOptions {
        this.parseCli();

        const options: CliOptions = {
            VERBOSE: this.CLI.opts().verbose,
        };

        return options;
    }
}
