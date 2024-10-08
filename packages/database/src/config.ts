import { z } from 'zod';
import { createEnv } from '@repo/utils';

const schema = z.object({
  DATABASE_URL: z
    .string()
    .regex(/^"?mysql:\/\/.*:?.*?@.*(?::.*)?\/.*/)
    .default('mysql://root:roottoor@localhost:3306/sound_cloud_helper'),
  DATABASE_RO_URL: z
    .string()
    .regex(/^"?mysql:\/\/.*:?.*?@.*(?::.*)?\/.*/)
    .optional(),
});

export const env = createEnv(schema);
