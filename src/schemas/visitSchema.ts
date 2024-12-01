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
    isBot : z.boolean().default(false),
    url : z.string().optional(),
    source : z.string().optional()
  });


export const VisitedPageSchema = z.object({
      visitId: z.string(),
      url    : z.string(),
  });