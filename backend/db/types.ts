type Message = {
    id: string
    text: string
    author: string
    date: number
}

type CreateMessage = Omit<Message, "id" | "date">

type Author = {
    id: string
    name: string
    online: boolean
}

type DBAuthor = Omit<Author, "online">

type CreateAuthor = Omit<Author, "id" | "online">

export type {
    Message,
    CreateMessage,
    Author,
    CreateAuthor,
    DBAuthor
}