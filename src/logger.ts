import pino from 'pino';

export type Logger = pino.Logger;

export function createLogger(level: string, pretty: boolean): Logger {
  return pino({
    level,
    base: undefined,
    redact: [],
    transport:
      (pretty ?? process.stdout.isTTY)
        ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
              translateTime: 'SYS:standard',
              singleLine: false,
            },
          }
        : undefined,
  });
}
