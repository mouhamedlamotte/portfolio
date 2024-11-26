import { z } from "zod";


export const VisitSchema = z.object({
    ipAddress: z.string().optional(),
    country: z.string().optional(),
    region: z.string().optional(),
    deviceType: z.string().optional(),
    os: z.string().optional(),
    browser: z.string().optional(),
    language: z.string().optional(),
    referrer: z.string().optional(),
    visitedPage: z.string(),
    isBot : z.boolean().default(false)
  });