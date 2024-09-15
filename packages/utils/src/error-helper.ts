import { type ZodError } from 'zod';

export class EError extends Error {
  private zodError?: ZodError | undefined;
  constructor(message: string, zodError?: ZodError) {
    super(message);
    this.name = 'EError';
    this.zodError = zodError;
  }
}

export const isAError = (obj: unknown): obj is EError => {
  return obj instanceof Error;
};
