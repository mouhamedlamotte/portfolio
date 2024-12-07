import { create } from "zustand"

type MessagePreviewStore = {
    preview : {
        preview : boolean
        recipient_name : string,
        message : string,
    }
    setPreview : (preview : {
        recipient_name : string,
        message : string
        preview : boolean
    }) => void
    resetPreview : () => void
}

export const useMessagePreviewStore = create<MessagePreviewStore>((set) => ({
    preview : {
        preview : false,
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
                preview : false,
                recipient_name : "",
                message : ""
            }
        })
    }
}))