'use server';

import { prisma, type User } from '@repo/database';

export const getUsers = async (): Promise<User[]> => {
  const user = await prisma.user.findFirstOrThrow();
  return [user];
};
