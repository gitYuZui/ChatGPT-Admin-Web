/*
 * @Autor: zzz
 * @Description: 
 * @Date: 2023-05-31 10:59:13
 * @LastEditors: OBKoro1
 * @LastEditTime: 2023-05-31 11:11:15
 */
import { Redis } from "@upstash/redis";


console.error("redis-url", process.env.REDIS_URL ?? "");
console.error("REDIS_TOKEN", process.env.REDIS_TOKEN ?? "");

export const defaultRedis = new Redis({
  url: process.env.REDIS_URL ?? "",
  token: process.env.REDIS_TOKEN ?? "",
});
