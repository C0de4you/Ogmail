const sortFunc = ((value, previous, current) => {
    if (previous[value] > current[value]) return 1;
    else return -1;
})

export {
    sortFunc,
};