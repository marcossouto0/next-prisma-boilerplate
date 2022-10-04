/* eslint-disable vars-on-top */
/* eslint-disable no-var */
import type { PrismaClient } from '@prisma/client';

export {};

declare global {
  // Types here must be done using var
  var prisma: PrismaClient;
}
