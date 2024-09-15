'use server';

import { prisma, type User } from '@repo/database';

export const getUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};
