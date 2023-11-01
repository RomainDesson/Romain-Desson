import { useState, useEffect } from "react";
import { Articles } from "../../Articles";
import { Projects } from "../../Projects";
import { Skills } from "../../Skills";
import { Contacts } from "../../Contacts";
import { BubblesPage } from "../../BubblesPage";
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {TransitionsStyles} from '../transitionsStyle.ts';

export const RightSide = () => {
    const location = useLocation();
    const [prevIndex, setPrevIndex] = useState<number | null>(null);

    const getIndexFromPath = (path: string) => {
        switch(path) {
            case '/': return 0;
            case '/articles': return 1;
            case '/projects': return 2;
            case '/skills': return 3;
            case '/contacts': return 4;
            default: return 0;
        }
    };

    useEffect(() => {
        const currentIndex = getIndexFromPath(location.pathname);
        const animationDirection = prevIndex && currentIndex > prevIndex ? 'up' : 'down';
        setPrevIndex(currentIndex);
        document.documentElement.style.setProperty('--animation-direction', animationDirection === 'up' ? '-100%' : '100%');
    }, [location, prevIndex]);


    return (
        <>
            <TransitionsStyles />
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="page"
                    timeout={300}
                >
                    <div className="page">
                        <Routes location={location}>
                            <Route path="/" element={<BubblesPage />} />
                            <Route
                                path="/articles"
                                element={<Articles />}
                            />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/contacts" element={<Contacts />} />
                        </Routes>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
};
