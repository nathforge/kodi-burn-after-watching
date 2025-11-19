import { z } from 'zod';

export function configFromEnv(): Config {
  const env = EnvSchema.parse(process.env);

  return {
    log: {
      level: env.LOG_LEVEL,
      pretty: true,
    },
    kodi: {
      jsonRpc: env.KODI_JSONRPC,
    },
    tag: env.TAG,
  };
}

const LogLevelEnum = z.enum(['debug', 'warn', 'info', 'error']);

const EnvSchema = z.object({
  KODI_JSONRPC: z.string(),
  LOG_LEVEL: LogLevelEnum.default('error'),
  TAG: z.string(),
});

export type Config = {
  log: {
    level: z.infer<typeof LogLevelEnum>;
    pretty: boolean;
  };
  kodi: {
    jsonRpc: string;
  };
  tag: string;
};
