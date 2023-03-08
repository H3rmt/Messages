type Message = {
    id: string
    text: string
    author: string
    date: number
}

type CreateMessage = Omit<Message, "id">

type Author = {
    id: string
    name: string
}

type CreateAuthor = Omit<Author, "id">

export type {
    Message,
    CreateMessage,
    Author,
    CreateAuthor
}