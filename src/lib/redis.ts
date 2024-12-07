import Redis from "ioredis"
import { kdebug } from "./kdebug";


const redisUrl = process.env.REDIS_URL ?? ""


export const redis = new Redis(redisUrl)


export const cleanCache = async (key?: string | null, patern?: string | null) => {
    const keys = await redis.keys("*");
        
    try {
        if (key) {
            await redis.del(key);
        }
        if  (patern) {
            for (const key of keys) {
                if (key.startsWith(patern)) {
                    await redis.del(key);
                }
            }
        }
        return true
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return false
    }
}