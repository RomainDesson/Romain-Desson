type isTooCloseType = {
    minDistance: number,
    newPos: { top: string; left: string; },
    existingPositions: { top: string; left: string; }[]
}

export const isTooClose = (props: isTooCloseType) => {
    const { minDistance, newPos, existingPositions } = props
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
