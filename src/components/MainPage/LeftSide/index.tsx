import React, { useEffect } from 'react';
import Typed from 'typed.js';
import {TypingSpan, Wrapper} from "./style.ts";
import { useSpring, animated } from 'react-spring';

export const LeftSide = () => {
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

    return (
        <Wrapper>
            <TypingSpan id="typed"></TypingSpan>
        </Wrapper>

    );
}
