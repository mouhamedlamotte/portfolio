import { create } from "zustand"

type MessagePreviewStore = {
    preview : {
        recipient_name : string,
        message : string,
    }
    setPreview : (preview : {
        recipient_name : string,
        message : string
    }) => void
    resetPreview : () => void
}

export const useMessagePreviewStore = create<MessagePreviewStore>((set) => ({
    preview : {
        recipient_name : "",
        message : ""
    },
    setPreview : (preview) => {
        set({
            preview
        })
    },
    resetPreview : () => {
        set({
            preview : {
                recipient_name : "",
                message : ""
            }
        })
    }
}))