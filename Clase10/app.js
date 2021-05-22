const chalk = require('chalk')
const log = console.log;

log(`
CPU: ${chalk.yellow('90%')}
RAM: ${chalk.blue('40%')}
DISK: ${chalk.red('70%')}
`);

log(chalk.blue('Hello') + ' World' + chalk.red('!'));