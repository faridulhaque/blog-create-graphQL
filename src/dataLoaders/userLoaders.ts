import DataLoader from "dataloader";
import { prisma } from "..";
import { User } from "@prisma/client";

const batchUsers = async (ids: string[]) => {
  const users = await prisma.user.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  const userData: { [key: string]: User } = {};

  users.forEach((user: User) => {
    userData[user.id] = user;
  });

  return ids.map((id)=> userData[id])
};


export const userLoader = new DataLoader<string, User>(batchUsers as (keys: readonly string[]) => Promise<(User | Error)[]>);