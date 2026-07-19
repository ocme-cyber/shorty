import type { Request, Response } from "express";   

export const getLoginPage = (req: Request, res: Response) => {
    res.render("user/ejs/login.ejs", { title: "Login Page" });
}

export const getRegisterPage = (req: Request, res: Response) => {
    res.render("user/ejs/register.ejs", { title: "Register Page" });
}