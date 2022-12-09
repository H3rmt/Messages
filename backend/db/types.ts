type Message = {
    id: number
    text: string
    author: number
    date: string
}

type Author = {
    id: number
    name: string
}

export type {
    Message,
    Author
}