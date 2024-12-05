import Redis from "ioredis"
import { kdebug } from "./kdebug";


const redisUrl = process.env.REDIS_URL ?? ""


export const redis = new Redis(redisUrl)


export const cleanCache = async (key?: string | null, patern?: string | null) => {
    try {
        if (key) {
            await redis.del(key);
        }
        if  (patern) {
            const k = redis.keys
            console.log(k);
        }
        return true
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return false
    }
}