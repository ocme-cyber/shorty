import type { Request, Response } from "express";
import * as urlService from "./url.service.js"
import type { UrlParams } from "./interfaces/interfaces.js";

export const createUrl = async (req: Request, res: Response) => {
    req.body.userId = req.user.id
    try {
        const shortUrl = await urlService.createUrl(req.body)
        return res.status(203).json({ shortUrl })
    } catch(e) {
        console.log(e)
        if(e instanceof Error) {
            return res.status(501).json({ message: e.message})
        } else {
            return res.status(501).json({ message: "Неизвестная ошибка"})
        }
    }
} 

export const getHomePage = (req: Request, res: Response) => {
  res.render("url/ejs/home.ejs", { user: req.user });
}

export const redirectToOrigins = async (req: Request<UrlParams>, res: Response) => {
    try {
        const originalUrl = await urlService.getOriginalUrl( req.params.urlCode )
        res.redirect(originalUrl)
    } catch(e) {
        if (e instanceof Error) {
            return res.status(404).json({ message: e.message})
        } else {
            return res.status(403).json({ message: "Неизвестная ошибка"})
        }
        
    }
    
}