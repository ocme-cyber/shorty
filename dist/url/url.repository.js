import prisma from "../lib/prisma.js";
import dotenv from "dotenv";
export const getAllUrls = async () => {
    return await prisma.url.findMany();
};
export const getUrlsFromUser = async (userId) => {
    return await prisma.url.findMany({ where: {
            userId
        } });
};
export const createUrl = async (url) => {
    return await prisma.url.create({ data: url });
};
export const getUrlFromCode = async (urlCode) => {
    return await prisma.url.update({ where: { urlCode }, data: { clicks: { increment: 1 } } });
};
//# sourceMappingURL=url.repository.js.map