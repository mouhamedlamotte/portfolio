import {create} from "zustand"

type ImagePreviewState = {
    imgs : string[] | null
    index : number,
    setSrc : (imgs : string[] | null, index ?: number) => void
}

export const useImagePreviewStore = create<ImagePreviewState>((set) => ({
    index : 0,
    imgs: null,

    setSrc: (imgs : string[] | null, index = 0) => set({ imgs , index }),
}))