import { useEffect, useState } from 'react';
// @ts-ignore
import Typed from 'typed.js';
import {TypingSpan, Wrapper, Ball, LineTop, LineBottom, MenuList, MenuItem} from './style.ts';

type LeftSideType = {
    handleReduceLeftSide: () => void
    handleSetRightContentIndex: (index: number) => void
    rightContentIndex: number
}

export const LeftSide = (props: LeftSideType) => {
    const { handleReduceLeftSide, handleSetRightContentIndex, rightContentIndex } = props
    const [ballMoving, setBallMoving] = useState(false);
    const [linesExpanding, setLinesExpanding] = useState(false);
    const [ballVisible, setBallVisible] = useState(false);
    const [handleMoveName, setHandleMoveName] = useState(false)
    const [centerMenuList, setCenterMenuList] = useState(false)

    const handleAnimation = () => {
        setTimeout(() => {
            setBallVisible(true);
            setBallMoving(true);
            setTimeout(() => {
                setTimeout(() => {
                    setLinesExpanding(true);
                    setTimeout(() => {
                        setBallVisible(false);
                        handleReduceLeftSide()
                        setHandleMoveName(true)
                        setTimeout(() => {
                            setCenterMenuList(true)
                        }, 500)
                    }, 1000)
                }, 200);
            }, 150);
        }, 50);
    }

    useEffect(() => {
        const typed = new Typed('#typed', {
            strings: ['Romain<br>Desson'],
            typeSpeed: 90,
            showCursor: false,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const handleMenuItemClick = (index: number) => {
        handleSetRightContentIndex(index);
    }

    return (
        <Wrapper isCenter={centerMenuList}>
            <TypingSpan id="typed" onClick={handleAnimation} className={handleMoveName ? 'move-up' : ''}></TypingSpan>
            {handleMoveName && (
                <MenuList>
                    <MenuItem
                        className={`fade-in ${rightContentIndex === 1 ? 'selected' : ''}`}
                        onClick={() => handleMenuItemClick(1)}
                        style={{animationDelay: '0.5s'}}
                    >
                        Articles
                    </MenuItem>
                    <MenuItem
                        className={`fade-in ${rightContentIndex === 2 ? 'selected' : ''}`}
                        onClick={() => handleMenuItemClick(2)}
                        style={{animationDelay: '1s'}}
                    >
                        Projets
                    </MenuItem>
                    <MenuItem
                        className={`fade-in ${rightContentIndex === 3 ? 'selected' : ''}`}
                        onClick={() => handleMenuItemClick(3)}
                        style={{animationDelay: '1.5s'}}

                    >
                        Compétences
                    </MenuItem>
                    <MenuItem
                        className={`fade-in ${rightContentIndex === 4 ? 'selected' : ''}`}
                        onClick={() => handleMenuItemClick(4)}
                        style={{animationDelay: '2s'}}
                    >
                        Réseaux
                    </MenuItem>
                </MenuList>
            )}
            {ballVisible && !centerMenuList && (
                <Ball className={ballMoving ? 'combined' : ''}></Ball>
            )}
            <LineTop className={linesExpanding ? 'expand' : ''}></LineTop>
            <LineBottom className={linesExpanding ? 'expand' : ''}></LineBottom>
        </Wrapper>
    );
};
