import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import * as userRepository from "./user.repository.js"
import type { User} from "./interfaces/authInterfaces.js"

const __dirname = import.meta.dirname
dotenv.config({ path: __dirname + "../../.env"})
const jwtSecret = process.env.JWT_SECRET as jwt.Secret

const host = process.env.HOST
if(!host) {
    throw new Error("HOST env is not set!")
}

export const loginUser = async (loginUser: User) => {
    const reqUser = await userRepository.getUserByLogin(loginUser.login)
    if (!reqUser) {
        throw new Error("The user with this login is not register")
    }
    
    const isValid = await bcrypt.compare(loginUser.password, reqUser.password)
    if (isValid) {
        const token = jwt.sign(
            { id: reqUser.id, login: reqUser.login },
            jwtSecret,
            {expiresIn: "7d"}
        )
        console.log(token)
        return token
    } else {
        console.log("figna")
        throw new Error("Login error. Password is not valid")
    }

}

export const registerUser = async (newUser: User) => {
    const users = await userRepository.getAllUser()
    if (users.find(user => user.login === newUser.login)) {
        throw new Error('Логин занят')
    }
    const hash = await bcrypt.hash(newUser.password, 10)
    await userRepository.createUser({
        login: newUser.login,
        password: hash
    })
    const user = await userRepository.getUserByLogin(newUser.login)
    if (!user) {
        throw new Error("The user with this login is not register")
    }
    const token = jwt.sign(
        user,
        jwtSecret,
        {expiresIn: "7d"}
    )
    return token
}

export const getUserFromId = async (login: string ) => {
    if(!login) {
        throw new Error("Логин не найден")
    }
    const user = await userRepository.getUserByLogin(login)
    if (!user) {
        throw new Error("Пользователь не найден")   
    }

    return {
        ...user,
        urls: user.urls.map(url => ({
            ...url,
            shortUrl: `http://${host}:3000/${url.urlCode}`
        }))
    };
}