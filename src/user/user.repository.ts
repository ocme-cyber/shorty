import prisma from "../lib/prisma.js";
import type { User } from "./interfaces/authInterfaces.js"

export const getAllUser = async () => {
    return await prisma.user.findMany();
}

export const getUserByLogin = async (login: string) => {
    return await prisma.user.findUnique({where: {login}, include: { urls: true }});
}

export const createUser = async (user: User) => {
    return await prisma.user.create({data: user})
}
