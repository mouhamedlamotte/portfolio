export type MessageType = {
    id?: string,
    name: string,
    email: string,
    message: string,
    read : boolean,
    replied: boolean,
    createdAt: Date
}