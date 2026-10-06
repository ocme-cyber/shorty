import prisma from "../lib/prisma.js"
import dotenv from "dotenv"
import type { Url } from "./interfaces/interfaces.js"

export const getAllUrls = async () => {
    return await prisma.url.findMany()
}
export const getUrlsFromUser = async (userId: string) => {
    return await prisma.url.findMany({ where: {
        userId
    } })
}

export const createUrl = async (url: Url) => {
    return await prisma.url.create({ data: url })
}

export const getUrlFromCode = async (urlCode: string) => {
    return await prisma.url.update({ where: { urlCode }, data: {clicks: { increment: 1}}})
    
}