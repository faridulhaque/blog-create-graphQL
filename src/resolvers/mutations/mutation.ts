import { postResolvers } from "./post";
import { authResolvers } from "./auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const Mutation = {
  ...authResolvers,
  ...postResolvers,
};
