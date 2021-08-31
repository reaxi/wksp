const { Command, Argument } = require('commander');
import { getVersion, Result } from 'nanov';

import { wksp } from './wksp';

require('jsonc-require');
const currentVersion = require('../package.json').version;

const programVersion = 'wksp version: ' + currentVersion;
/**
 * Program definition: commands / args / options
 * (CLI TOOL) wksp
 * @description yarn workspaces extension
 * @param {string} options - options called from cmd
 * @example wksp
 * @class Command
 */
const program = new Command();

program
    .version(programVersion, '-v|--version')
    .command('wksp', { isDefault: true })
    .description('yarn workspace extension tool')

    .option('-n, --name <name> ', 'project name (as in package.json)')
    .argument('[command]', "package script you'd like to run")
    .argument(
        '[variadic...]',
        "variadic arguments you'd like to pass to script"
    )

    .action((command: string, variadic: string[], options: any) =>
        wksp(command, variadic, options)
    );

//verify updates
program.hook('postAction', async () => {
    const { latestVersion } = (await getVersion('wksp', currentVersion, {
        cacheTime: 12,
    })) as Result;

    if (latestVersion) {
        console.log('\n[wksp] new version available, run:');
        console.log('npm i -g wksp\n');
        console.log('to update');
    }
});

export { program };
