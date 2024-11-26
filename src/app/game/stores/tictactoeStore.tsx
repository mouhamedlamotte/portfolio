import { z } from "zod";
import { create } from "zustand";

const tictactoeLevelStateSchema = z.object({
    // 1 or 2
    level: z.number(),
    setLevel: z.function().args(z.number()).returns(z.void()),
})

type tictactoeLevelState = z.infer<typeof tictactoeLevelStateSchema>

export const useTictactoeLevelStore = create<tictactoeLevelState>((set) => ({
    level: 1,
    setLevel: (level : number) => set({ level }),
}))