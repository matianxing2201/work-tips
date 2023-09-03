export function getData (init, count) {
    const arr = [];
    for (let i = init; i <= count; i++){
        arr.push(i);
    }

    return arr;
}