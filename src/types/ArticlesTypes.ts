export type Article = {
    id: number
    title: string
    preview: string
    content: string
    imageUrl?: string
    createdAt: string
    updatedAt: string
}

export type Articles = Article[]

export const baseArticle: Article = {
    id: 1,
    title: '',
    preview: '',
    content: '',
    imageUrl: '',
    createdAt: '',
    updatedAt: '',
}

export const baseArticles: Articles = [{
    id: 1,
    title: '',
    preview: '',
    content: '',
    imageUrl: '',
    createdAt: '',
    updatedAt: '',
}]
