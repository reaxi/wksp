import path from 'path';
const execa = require('execa');

require('jsonc-require');

export async function wksp(command: string, options: { name: string }) {
    try {
        const name = options.name ?? getPackageName();
        const cmd = command ?? '';

        execa('yarn', ['workspace', name, cmd], {
            stdio: 'inherit',
        }); //
    } catch (error) {
        console.log(error.message);
    }
}

function getPackageName() {
    try {
        return require(path.resolve(process.cwd(), './package.json')).name;
    } catch (error) {
        throw 'cant find package.json';
    }
}
