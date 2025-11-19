import { Command } from 'commander';
import ms, { StringValue } from 'ms';
import { configFromEnv, type Config } from './config.js';
import { Service } from './service.js';
import { createLogger, Logger } from './logger.js';
import pkg from '../package.json' with { type: 'json' };

const program = new Command();

program.name(pkg.name).description(pkg.description);

program.command('once').action(async () => {
  const config = configFromEnv();
  const logger = createLogger(config.log.level, config.log.pretty);
  await once(config, logger);
});

program
  .command('loop')
  .option('--delay <duration>', 'Delay between runs (e.g. 6h, 30m)')
  .action(async (opts: { delay: StringValue }) => {
    let delayMs: number;
    if (!opts.delay) {
      program.error('--delay option is required');
      return;
    }
    try {
      delayMs = ms(opts.delay);
    } catch {
      program.error("Couldn't parse --delay option");
      return;
    }

    const config = configFromEnv();
    const logger = createLogger(config.log.level, config.log.pretty);
    while (true) {
      await once(config, logger);
      logger.debug(`Waiting ${ms(delayMs)} before next run`);
      await sleep(delayMs);
    }
  });

async function once(config: Config, logger: Logger) {
  const service = new Service(config, logger);
  await service.run();
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

program.parseAsync();
