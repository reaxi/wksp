const { Command } = require('commander');
import { verifyUpdates } from '@utils/verifyUpdates';
import { wksp } from './wksp';

require('jsonc-require');
const currentVersion = require('../package.json').version;

const programVersion = 'wksp version: ' + currentVersion;
/**
 * Program definition: commands / args / options
 * (CLI TOOL) wksp
 * @description yarn workspaces extension
 * @param {string} options - options called from cmd
 * @example wksp --help
 * @class Command
 */
const program = new Command();

program
    .version(programVersion, '-v|--version')
    .description('yarn workspace extension tool')
    //
    .option('-n, --name <name> ', 'project name (as in package.json)')
    .argument('[command]', "package script you'd like to run")
    .argument(
        '[variadic...]',
        "variadic arguments you'd like to pass to script"
    )
    //compatibility
    .option('-D, --dev', 'save dev dependency')
    .option('-P, --peer', 'save peer dependency')
    .option('-E, --exact', 'save exact dependency')
    //
    .action((command: string, variadic: string[], options: any) =>
        wksp({ command, variadic, options })
    );

//verify updates
program.hook('postAction', async () => verifyUpdates(currentVersion));

export { program };
