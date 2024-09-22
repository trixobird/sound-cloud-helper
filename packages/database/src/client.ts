import { readReplicas } from '@prisma/extension-read-replicas';
import { neonConfig, Pool } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';
import { Environment, NODE_ENV } from '@repo/mode';
// eslint-disable-next-line import/no-relative-packages -- we need to import from the generated client
import { PrismaClient } from '../.prisma';
import { env } from './config';

neonConfig.webSocketConstructor = ws;
const connectionString = env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);
export const prisma = new PrismaClient(NODE_ENV !== Environment.Development ? { adapter } : undefined).$extends(
  readReplicas({
    url: env.DATABASE_RO_URL ?? env.DATABASE_URL,
  }),
);

// eslint-disable-next-line import/no-relative-packages -- we need to import from the generated client
export * from '../.prisma';
