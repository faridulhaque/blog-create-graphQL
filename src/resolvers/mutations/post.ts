export const postResolvers = {
  addPost: async (parent: any, { post }: any, context: any) => {
    const { prisma, userId } = context;
    if (!userId) {
      return {
        post: null,
        error: "invalid user",
      };
    }

    const newPost = await prisma.post.create({
      ...post,
      authorId: userId,
    });

    return {
      post: newPost,
      error: null,
    };
  },

  updatePost: async (parent: any, { postId, post }: any, context: any) => {
    const { prisma, userId } = context;

    if (!userId) {
      return {
        post: null,
        error: "invalid user",
      };
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
        authorId: userId,
      },
      data: post,
    });

    return {
      post: updatedPost,
      error: null,
    };
  },

  deletePost: async (parent: any, { postId }: any, context: any) => {
    const { prisma, userId } = context;

    if (!userId) {
      return {
        post: null,
        error: "invalid user",
      };
    }

    const deletedPost = await prisma.post.delete({
      where: {
        id: postId,
        authorId: userId,
      },
    });

    return {
      post: deletedPost,
      error: null,
    };
  },
};
