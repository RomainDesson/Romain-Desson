import {Article} from "../../../types/ArticlesTypes.ts";
import {Card, CardImage, Content, TextContainer, Title} from "./style.ts";

type ArticleCardType = {
    article: Article
    handleViewArticleDetails: () => void
    setSelectedArticle: (article: Article) => void
}

export const ArticleCard = (props: ArticleCardType) => {
    const { article, handleViewArticleDetails, setSelectedArticle } = props

    const handleClickCard = () => {
        handleViewArticleDetails()
        setSelectedArticle(article)
    }

    return (
        <Card onClick={() => handleClickCard()}>
            <CardImage src={article.imageUrl}/>
            <TextContainer>
                <Title>{article.title}</Title>
                <Content>{article.preview}</Content>
            </TextContainer>
        </Card>
    )
}
