import { Redis } from "@upstash/redis";


console.error("redis-url", process.env.REDIS_URL ?? "");
console.error("REDIS_TOKEN", process.env.REDIS_TOKEN ?? "");

export const defaultRedis = new Redis({
  url: process.env.REDIS_URL ?? "",
  token: process.env.REDIS_TOKEN ?? "",
});
