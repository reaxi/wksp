import { getVersion, Result } from 'nanov';

export const verifyUpdates = async (currentVersion: string) => {
    const { latestVersion } = (await getVersion('wksp', currentVersion, {
        cacheTime: 12,
    })) as Result;

    if (latestVersion) {
        console.log('\n[wksp] new version available, run:');
        console.log('npm i -g wksp\n');
        console.log('to update');
    }
};
