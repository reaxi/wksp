import path from 'path';
const execa = require('execa');
require('jsonc-require');

interface WKSP {
    command: string;
    variadic: string[];
    options: WKSPOptions;
}

type WKSPOptions = {
    name?: string;
} & CompatibilityOptions;

type CompatibilityOptions = {
    dev?: boolean;
    exact?: boolean;
    peer?: boolean;
};

export async function wksp({ command, variadic, options }: WKSP) {
    //if --list @todo
    //if --all @todo
    await workspace({ command, variadic, options });
}

async function workspace({ command, variadic, options }: WKSP) {
    try {
        const name = options.name ?? getPackageName();
        const cmd = command ?? '';
        const args = variadic ?? '';
        const compatibility = getCompatibilityOptions(options);

        execa('yarn', ['workspace', name, cmd, ...args, ...compatibility], {
            stdio: 'inherit',
        }); //
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }
}

//function workspaces(params: any) {}

function getPackageName() {
    try {
        return require(path.resolve(process.cwd(), './package.json')).name;
    } catch (error) {
        throw 'cant find package.json';
    }
}

function getCompatibilityOptions(options: CompatibilityOptions): string[] {
    return [
        options.dev && '-D',
        options.exact && '-E',
        options.peer && '-P',
    ].filter(Boolean) as string[];
}
