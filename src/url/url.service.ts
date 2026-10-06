import type { Request } from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import { type Url, type ReqUrlBody, ReqUrlBodySchema } from "./interfaces/interfaces.js";
import * as urlRepositoty from "./url.repository.js"

const __dirname = import.meta.dirname
dotenv.config({path: __dirname + "../../../.env"})

const host = process.env.HOST

if(!host) {
    throw new Error("Host enviroments is not set")
}

export const createUrl = async (body: ReqUrlBody) => {
    const urlCode = nanoid(5)

    const result = ReqUrlBodySchema.safeParse(body)

    if(!result.success) {
        throw new Error(result.error.issues[0]?.message)
    }

    const url: Url = {
        originalUrl: body.originalUrl,
        urlCode,
        userId: body.userId
    }
    await urlRepositoty.createUrl(url)
    const shortUrl = `http://${host}:3000/${urlCode}`
    return shortUrl

}

export const getOriginalUrl = async (urlCode: string) => {
    const url = await urlRepositoty.getUrlFromCode(urlCode)
    if (!url) {
        throw new Error("Неверная ссылка")
    }
    return url.originalUrl 
}