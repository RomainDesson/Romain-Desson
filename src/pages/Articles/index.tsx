import {useArticlesStore} from "../../stores/articles.ts";
import {useEffect, useLayoutEffect, useState} from "react";
import {ArticleCard} from "./ArticleCard";
import {ArticlesPostWrapper} from "./style.ts";
import {ArticleDetails} from "./ArticleDetails";
import {ModalComponent} from "../../components/Modal";
import {Pagination} from "../../components/Pagination";
import {useTransition, animated} from "react-spring";

export const Articles = () => {
    const { articles, selectedArticle, setSelectedArticle, fetchArticles, totalCount } = useArticlesStore(state => state);
    const [viewArticleDetails, setViewArticleDetails] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [prevPage, setPrevPage] = useState(1);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        setShouldAnimate(true);
    }, []);

    useEffect(() => {
        fetchArticles(currentPage);
    }, [currentPage]);

    const transitions = useTransition(articles, {
        keys: article => article.id,
        from: shouldAnimate ? { opacity: 0, transform: currentPage > prevPage ? 'translateX(100%)' : 'translateX(-100%)'} : { opacity: 1, transform: 'translateX(0%)' },
        enter: { opacity: 1, transform: 'translateX(0%)'},
        leave: (_, index) => (
            { opacity: 0, transform: currentPage > prevPage ? 'translateX(-100%)' : 'translateX(100%)', position: 'absolute', top: `${index * 19.5}vh`}
        ),
        config: { tension: 600, friction: 50 },
    });

    const handleViewArticleDetails = () => {
        setViewArticleDetails(true);
    };

    const handleCloseModal = () => {
        setViewArticleDetails(false);
    };

    const handleChangePage = (pageNumber: number) => {
        setPrevPage(currentPage);
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <ArticlesPostWrapper>
                {transitions((style, article) => (
                    <animated.div style={{...style}} key={article.id}>
                        <ArticleCard
                            key={article.id}
                            article={article}
                            handleViewArticleDetails={handleViewArticleDetails}
                            setSelectedArticle={setSelectedArticle}
                        />
                    </animated.div>
                ))}
            </ArticlesPostWrapper>
            <Pagination totalCount={totalCount} currentPage={currentPage} handleChangePage={handleChangePage} />
            <ModalComponent isVisible={viewArticleDetails} handleClose={handleCloseModal}>
                <ArticleDetails article={selectedArticle} />
            </ModalComponent>
        </>
    );
};
