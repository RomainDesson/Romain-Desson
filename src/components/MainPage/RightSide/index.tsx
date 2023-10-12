import {useSpring, useSprings} from "react-spring";
import { useState, useEffect } from "react";
import {BubbleContainer, BubbleWrapper} from "./style.ts";

export const RightSide = () => {
    const [showBubbles, setShowBubbles] = useState([false, false, false, false, false, false]);
    const [positions, setPositions] = useState<{ top: string, left: string }[]>([]);
    const [loaded, setLoaded] = useState(false);
    const imageNames = ['ts.png', 'react.png', 'docker.png', 'github.png', 'node.png', 'next.png'];

    useEffect(() => {
        if (positions.length === 6) {  // Assumant que vous avez 6 bulles
            setLoaded(true);
        }
    }, [positions]);

    const idleSprings = useSprings(
        positions.length,
        positions.map((_, index) => ({
            from: { opacity: 0, top: positions[index]?.top || '0px', left: positions[index]?.left || '0px' },
            to: async (next) => {
                // Initial fade-in avec un délai basé sur l'index
                await new Promise(resolve => setTimeout(resolve, index * 250));
                await next({
                    opacity: 1,
                    top: positions[index]?.top || '0px',
                    left: positions[index]?.left || '0px',
                    config: { duration: 1000 }
                });

                // Ensuite, passer à l'animation idle
                if (loaded) {
                    while (1) {
                        const randomDuration = Math.random() * 1000 + 1500;
                        const randomDistance = Math.random() * 2;
                        const newTop = Math.min(Math.max(parseFloat(positions[index].top) + randomDistance, 0), 100 + 5);
                        const newLeft = Math.min(Math.max(parseFloat(positions[index].left) + randomDistance, 0), 100 + 5);

                        await next({
                            top: `${newTop}vh`,
                            left: `${newLeft}vw`,
                            config: { duration: randomDuration }
                        });

                        await next({
                            top: positions[index].top,
                            left: positions[index].left,
                            config: { duration: randomDuration }
                        });
                    }
                }
            }
        }))
    );



    const minDistance = 16;

    const isTooClose = (newPos, existingPositions) => {
        for (let pos of existingPositions) {
            const dTop = parseFloat(newPos.top) - parseFloat(pos.top);
            const dLeft = parseFloat(newPos.left) - parseFloat(pos.left);
            const distance = Math.sqrt(Math.pow(dTop, 2) + Math.pow(dLeft, 2));
            if (distance < minDistance) {
                return true;
            }
        }
        return false;
    };

    const randomDeviation = (deviation, center, bubbleSize) => {
        let rand = (Math.random() - 0.5) * 2 * deviation;
        let position = center + rand;

        if (position < bubbleSize / 2) {
            position = bubbleSize / 2;
        } else if (position > 100 - bubbleSize / 2) {
            position = 100 - bubbleSize / 2;
        }

        return position;
    };

    const generateRandomPosition = () => {
        const deviation = 20;
        const centerTop = 45;
        const centerLeft = 20;
        const bubbleSize = 0;

        const top = randomDeviation(deviation, centerTop, bubbleSize);
        const left = randomDeviation(deviation, centerLeft, bubbleSize);

        return {
            top: `${top}vh`,
            left: `${left}vw`
        };
    };

    useEffect(() => {
        const newPositions = [];
        let attempts = 0;
        while (newPositions.length < 6 && attempts < 1000) {
            attempts++;
            const newPos = generateRandomPosition();
            if (!isTooClose(newPos, newPositions)) {
                newPositions.push(newPos);
            }
        }
        setPositions(newPositions);
    }, []);

    useEffect(() => {
        const timers = [
            setTimeout(() => setShowBubbles(prev => [true, true, ...prev.slice(2)]), 3000),
            setTimeout(() => setShowBubbles(prev => [true, true, true, ...prev.slice(3)]), 4000),
            setTimeout(() => setShowBubbles(() => [true, true, true, true, true, true]), 5000)
        ];

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, []);

    return (
        <BubbleWrapper>
            {idleSprings.map((springProps, index) => (
                <BubbleContainer
                    key={index}
                    margin={'0px'}
                    top={positions[index]?.top || '0px'}
                    left={positions[index]?.left || '0px'}
                    style={{ ...springProps }}
                >
                    <img
                        src={`../../../public/${imageNames[index]}`}
                        alt={imageNames[index]}
                        style={{
                            maxWidth: imageNames[index] === 'ts.png' ? '70%' : '100%',
                            maxHeight: imageNames[index] === 'ts.png' ? '70%' : '100%'
                        }}
                    />
                </BubbleContainer>
            ))}
        </BubbleWrapper>
    );
};
