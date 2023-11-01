import {useEffect, useState} from "react";
import {ArrowButton, Button, ButtonsContainer, PaginationContainer} from "./style.ts";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

type PaginationType = {
    totalCount: number
    currentPage: number
    handleChangePage: (pageNumber: number) => void
}

export const Pagination = (props: PaginationType) => {
    const { totalCount, currentPage, handleChangePage: propsHandleChangePage } = props;
    const [prevPage, setPrevPage] = useState<number | null>(null);
    const numberOfPages = Math.ceil(totalCount / 4);
    const numberOfPagesArray = [...Array(numberOfPages).keys()].map(i => i + 1);

    useEffect(() => {
        return () => {
            handleChangePage(1);
        };
    }, []);

    const handleChangePage = (pageNumber: number) => {
        setPrevPage(currentPage);
        propsHandleChangePage(pageNumber);
    };

    const handleArrowClick = (direction: number) => {
        if (
            (direction === -1 && currentPage > 1) ||
            (direction === 1 && currentPage < numberOfPages)
        ) {
            handleChangePage(currentPage + direction);
        }
    }

    return (
        <PaginationContainer>
            <ButtonsContainer>
                <ArrowButton onClick={() => handleArrowClick(-1)}>
                    <MdKeyboardArrowLeft style={{fontSize: '40px'}}/>
                </ArrowButton>
                {numberOfPagesArray.map(pageNumber => (
                    <Button
                        key={pageNumber}
                        onClick={() => handleChangePage(pageNumber)}
                        className={`
                            ${pageNumber === currentPage ? 'grow' : ''}
                            ${pageNumber === prevPage ? 'shrink' : ''}
                        `}
                    >
                        {pageNumber}
                    </Button>
                ))}
                <ArrowButton onClick={() => handleArrowClick(1)}>
                    <MdKeyboardArrowRight style={{fontSize: '40px'}}/>
                </ArrowButton>
            </ButtonsContainer>
        </PaginationContainer>
    );
};
