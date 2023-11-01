import {Article} from "../../../types/ArticlesTypes.ts";

type ArticleDetailsType = {
    article: Article
}

export const ArticleDetails = (props: ArticleDetailsType) => {
    const { article } = props

    return (<div style={{fontSize: '96px'}}>{article.content}</div>)
}
