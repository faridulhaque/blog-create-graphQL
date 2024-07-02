import { userLoader } from "../dataLoaders/userLoaders";

export const Post = {
  author: async (parent: any, args: any, context: any) => {
    const { prisma } = context;
   return userLoader.load(parent.authorId)
  },
};
