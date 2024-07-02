import jwt from "jsonwebtoken";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

const main = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
      const token = req.headers.authorization as string;

      const userData: any = jwt.verify(token, process.env.JWT_SECRET as string);

      return {
        prisma,
        userId: userData.userId,
      };
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

main();
