import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import * as userRepository from "./user.repository.js";
const __dirname = import.meta.dirname;
dotenv.config({ path: __dirname + "../../.env" });
const jwtSecret = process.env.JWT_SECRET;
const host = process.env.HOST;
if (!host) {
    throw new Error("HOST env is not set!");
}
export const loginUser = async (loginUser) => {
    const reqUser = await userRepository.getUserByLogin(loginUser.login);
    if (!reqUser) {
        throw new Error("The user with this login is not register");
    }
    const isValid = await bcrypt.compare(loginUser.password, reqUser.password);
    if (isValid) {
        const token = jwt.sign({ id: reqUser.id, login: reqUser.login }, jwtSecret, { expiresIn: "7d" });
        console.log(token);
        return token;
    }
    else {
        console.log("figna");
        throw new Error("Login error. Password is not valid");
    }
};
export const registerUser = async (newUser) => {
    const users = await userRepository.getAllUser();
    if (users.find(user => user.login === newUser.login)) {
        throw new Error('Логин занят');
    }
    const hash = await bcrypt.hash(newUser.password, 10);
    await userRepository.createUser({
        login: newUser.login,
        password: hash
    });
    const user = await userRepository.getUserByLogin(newUser.login);
    if (!user) {
        throw new Error("The user with this login is not register");
    }
    const token = jwt.sign(user, jwtSecret, { expiresIn: "7d" });
    return token;
};
export const getUserFromId = async (login) => {
    if (!login) {
        throw new Error("Логин не найден");
    }
    const user = await userRepository.getUserByLogin(login);
    if (!user) {
        throw new Error("Пользователь не найден");
    }
    return {
        ...user,
        urls: user.urls.map(url => ({
            ...url,
            shortUrl: `http://${host}:3000/${url.urlCode}`
        }))
    };
};
//# sourceMappingURL=user.service.js.map