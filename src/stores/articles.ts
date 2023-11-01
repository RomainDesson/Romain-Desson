import {create} from "zustand";
import axios from 'axios'
import {Article, Articles, baseArticle, baseArticles} from "../types/ArticlesTypes.ts";
import {apiBaseUrl} from "../apiConfig.ts";

type ArticlesStoreType = {
    articles: Articles
    totalCount: number
    selectedArticle: Article
    setSelectedArticle: (article: Article) => void
    fetchArticles: (pageNumber: number) => void
}

const baseURl = `${apiBaseUrl}/articles`

export const useArticlesStore = create<ArticlesStoreType>(set => ({
    articles: baseArticles,
    totalCount: 0,
    selectedArticle: baseArticle,
    setSelectedArticle: (article) => {
        set({selectedArticle: article})
    },
    fetchArticles: async (pageNumber: number) => {
        await axios.get(`${baseURl}?page=${pageNumber}&pageSize=4`).then(res => {
            if (res.data) {
                set({articles: res.data.articles, totalCount: res.data.totalCount})
            }
        })
    }
}))
