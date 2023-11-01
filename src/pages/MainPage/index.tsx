import {LeftSideContainer, MainPageContainer, RightSideContainer} from './style.ts';
import { RightSide } from './RightSide';
import { LeftSide } from './LeftSide';
import {GlobalStyle} from "./LeftSide/style.ts";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom'

export const MainPage = () => {
    const [reducedLeftSide, setReducedLeftSide] = useState(false)
    const [rightContentIndex, setRightContentIndex] = useState(0)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/') {
            navigate('/');
        }
    }, []);

    const handleReduceLeftSide = () => {
        setReducedLeftSide(true)
    }

    const handleSetRightContentIndex = (index: number) => {
        switch (index) {
            case 0:
                navigate('/');
                setRightContentIndex(index)
                break;
            case 1:
                navigate('/articles');
                setRightContentIndex(index)
                break;
            case 2:
                navigate('/projects');
                setRightContentIndex(index)
                break;
            case 3:
                navigate('/skills');
                setRightContentIndex(index)
                break;
            case 4:
                navigate('/contacts');
                setRightContentIndex(index)
                break;
        }
    };

    return (
        <MainPageContainer>
            <GlobalStyle />
            <LeftSideContainer className={reducedLeftSide ? 'reduced' : ''}>
                <LeftSide
                    handleReduceLeftSide={handleReduceLeftSide}
                    handleSetRightContentIndex={handleSetRightContentIndex}
                    rightContentIndex={rightContentIndex}/>
            </LeftSideContainer>
            <RightSideContainer className={reducedLeftSide ? 'augmented' : ''}>
                <RightSide/>
            </RightSideContainer>
        </MainPageContainer>
    );
};
