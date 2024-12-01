import { prismaClient } from "@/lib/prisma.client";
import {  z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GamePlaySchema = z.object({
    level: z.enum(["EASY", "MEDIUM", "HARD"]),
    winner: z.enum(["USER", "COMPUTER"]).optional(),
    time: z.number().int().nonnegative().optional(),
    gameId: z.string(),
    image: z.string().url().optional(), 
    pattern: z.string().optional(), 
  });
  
export const addGamePlay = async (gamePlayData: z.infer<typeof GamePlaySchema>) => {
    try {
      await prismaClient.gamePlay.create({
        data: {
          gameId: gamePlayData.gameId,
          level: gamePlayData.level,
          winner: gamePlayData.winner,
          time: gamePlayData.time,
          image: gamePlayData.image,
          pattern: gamePlayData.pattern,
        },
      });
      return true;
    } catch (error) {
      console.error("Database Error:", error);
      return false;
    }
  };