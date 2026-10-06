import prisma from "../lib/prisma.js";
export const getAllUser = async () => {
    return await prisma.user.findMany();
};
export const getUserByLogin = async (login) => {
    return await prisma.user.findUnique({ where: { login }, include: { urls: true } });
};
export const createUser = async (user) => {
    return await prisma.user.create({ data: user });
};
//# sourceMappingURL=user.repository.js.map