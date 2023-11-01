const randomDeviation = (deviation: number, center: number, bubbleSize: number) => {
    let rand = (Math.random() - 0.5) * 2 * deviation;
    let position = center + rand;

    if (position < bubbleSize / 2) {
        position = bubbleSize / 2;
    } else if (position > 100 - bubbleSize / 2) {
        position = 100 - bubbleSize / 2;
    }

    return position;
};

export const generateRandomPosition = () => {
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
