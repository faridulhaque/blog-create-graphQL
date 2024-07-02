import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

export const Query = {
  me: async (parent: any, arg: any, context: any) => {
    const { prisma, userId } = context;
    const user = await prisma.user.findMany({
      where: {
        id: userId,
      },
    });

    return {
      user,
      error: null,
    };
  },

  user: async (parent: any, arg: any, context: any) => {
    const { prisma, userId } = context;
    const { profileId } = arg;

    if (!userId) {
      return {
        user: null,
        error: "Authentication failed",
      };
    }

    const profile = await prisma.user.findMany({
      where: {
        id: profileId,
      },
    });

    return {
      user: profile,
      error: null,
    };
  },

  posts: async (parent: any, arg: any, context: any) => {
    const { prisma } = context;
    return await prisma.post.findMany({
      where: { published: true },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });
  },
};
