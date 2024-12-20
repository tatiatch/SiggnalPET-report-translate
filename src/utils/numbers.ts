export const getRandomNumberInRange = (start: number, end: number): number => {
    // Ensure start is smaller than end
    if (start > end) {
        [start, end] = [end, start]; // Swap values if start is greater than end
    }

    // Generate a random number between start and end (inclusive)
    return Math.floor(Math.random() * (end - start + 1)) + start;
};
