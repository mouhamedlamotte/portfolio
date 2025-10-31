import Redis from "ioredis";
import { kdebug } from "./kdebug";

const redisUrl = process.env.REDIS_URL ?? "";

export const redis = new Redis(redisUrl, {
  maxRetriesPerRequest: 3,
  connectTimeout: 5000,
});

redis.on("connect", () => kdebug("✅ Redis connecté"));
redis.on("error", (err) => kdebug("❌ Erreur Redis", err));

export const cleanCache = async (key?: string | null, pattern?: string | null) => {
  try {
    if (key) {
      await redis.del(key);
    }

    if (pattern) {
      const keys = await redis.keys(`${pattern}*`);
      if (keys.length > 0) await redis.del(...keys);
    }

    return true;
  } catch (error) {
    kdebug("❌ Erreur pendant le cleanCache", error);
    return false;
  }
};
