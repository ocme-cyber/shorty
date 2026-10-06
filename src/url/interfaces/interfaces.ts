import { z } from "zod"

export const ReqUrlBodySchema = z.object({
    originalUrl: z.url("Введите корректную ссылку"),
    userId: z.cuid2()
})

export interface Url {
    originalUrl: string
    urlCode: string
    userId: string
}

export interface UrlParams {
    urlCode: string
}

export type ReqUrlBody = z.infer<typeof ReqUrlBodySchema>