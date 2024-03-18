import { exec } from "child_process";
import chalk from 'chalk';
const platformBuildCmd = process.platform === 'win32' ? 'npm run win-build' : 'npm run unix-build';
console.log(`Building for ${chalk.blue(process.platform)} using ${chalk.yellow(platformBuildCmd)} command ...`);
exec(platformBuildCmd, (err, stdout, stderr) => {
    if (err) {
        process.stderr.write(err)
        return
    }
    process.stdout.write(stdout)
    process.stderr.write(stderr)
});