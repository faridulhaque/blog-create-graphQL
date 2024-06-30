import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const resolvers = {
  Query: {},
  Mutation: {
    signUp: async (parent: any, arg: any, context: any) => {
      return await prisma.user.create({ data: arg });
    },
  },
};
