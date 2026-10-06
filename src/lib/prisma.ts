import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
import dotenv from "dotenv"

const __dirname = import.meta.dirname
dotenv.config({path: __dirname + "../../../.env"})
const databaseUrl = process.env.DATABASE_URL 
if(!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not set.");
}
const adapter = new PrismaPg({
    connectionString: databaseUrl
});

const prisma = new PrismaClient({
    adapter
})

export default prisma;