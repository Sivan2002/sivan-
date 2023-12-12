import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

let prisma: PrismaClient;

// @ts-ignore
if (!global.prisma) {
  // @ts-ignore
  global.prisma = new PrismaClient({
    log: ["info"],
  });
}
// @ts-ignore
prisma = global.prisma;

export default prisma;