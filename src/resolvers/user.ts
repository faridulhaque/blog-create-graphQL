export const User = {
  posts: async (parent: any, args: any, context: any) => {
    const { prisma } = context;
    return await prisma.post.findMany({
      where: { authorId: parent.id },
    });
  },
};
