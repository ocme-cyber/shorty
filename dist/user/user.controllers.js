import * as userService from "./user.service.js";
export const getLoginPage = (req, res) => {
    return res.render("user/ejs/login.ejs", { title: "Login Page" });
};
export const getRegisterPage = (req, res) => {
    return res.render("user/ejs/register.ejs", { title: "Register Page" });
};
export const loginUser = async (req, res) => {
    try {
        const token = await userService.loginUser(req.body.user);
        console.log(token);
        console.log(token.length);
        res.cookie("token", token);
        return res.status(200).json({ message: 'login', success: true });
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(500).json({ message: err, success: false });
        }
        return res.status(500).json({ message: 'Неизвестная ошибка', success: false });
    }
};
export const registerUser = async (req, res) => {
    console.log(req.body.user);
    try {
        const token = await userService.registerUser(req.body.user);
        res.cookie("token", token, { maxAge: 90000, httpOnly: true });
        return res.status(200).json({ message: 'register', success: true });
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(500).json({ message: err.message, success: false });
        }
        return res.status(500).json({ message: 'Неизвестная ошибка', success: false });
    }
};
export const getUserProfile = async (req, res) => {
    try {
        const user = await userService.getUserFromId(req.user.login);
        return res.render("user/ejs/profile.ejs", { user: user, userUrls: user.urls });
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(501).json({ message: e.message });
        }
        else {
            res.status(501).json({ message: "Неизвестная ошибка" });
        }
    }
};
export const logOutUser = async (req, res) => {
    console.log("fwef");
    try {
        res.clearCookie("token");
        return res.status(201).json({ success: true });
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(403).json({ message: err.message });
        }
        return res.status(403).json({ message: "Неизвестная ошибка" });
    }
};
//# sourceMappingURL=user.controllers.js.map