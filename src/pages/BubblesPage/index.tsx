import {BubbleContainer, BubbleWrapper} from "../MainPage/RightSide/style.ts";
import {useSprings} from "react-spring";
import {useEffect, useState} from "react";
import {generateRandomPosition} from "../../utils/GenerateRandomPosition";
import {isTooClose} from "../../utils/IsTooClose";

export const BubblesPage = () => {
    const [positions, setPositions] = useState<{ top: string, left: string }[]>([]);
    const [loaded, setLoaded] = useState(false);

    const imageNames = ['ts.png', 'react.png', 'docker.png', 'solidity.png', 'node.png', 'ether.png'];

    useEffect(() => {
        if (positions.length === 6) {
            setLoaded(true);
        }
    }, [positions]);

    useEffect(() => {
        const newPositions = [];
        let attempts = 0;
        while (newPositions.length < 6 && attempts < 1000) {
            attempts++;
            const newPos = generateRandomPosition();
            if (!isTooClose({minDistance: 16, newPos, existingPositions: newPositions})) {
                newPositions.push(newPos);
            }
        }
        setPositions(newPositions);
    }, []);

    const idleSprings = useSprings(
        positions.length,
        positions.map((_, index) => ({
            from: { opacity: 0, top: positions[index]?.top || '0px', left: positions[index]?.left || '0px' },
            to: async (next: any) => {
                await new Promise(resolve => setTimeout(resolve, index * 250));
                await next({
                    opacity: 1,
                    top: positions[index]?.top || '0px',
                    left: positions[index]?.left || '0px',
                    config: { duration: 1000 }
                });
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

    return (
        <BubbleWrapper>
            {idleSprings.map((springProps, index) => (
                <BubbleContainer
                    key={index}
                    margin={'0px'}
                    top={positions[index]?.top || '0px'}
                    left={positions[index]?.left || '0px'}
                    style={{
                        ...springProps,
                    }}
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
    )
}
