// BEGIN
const groupBy = (arr, prop) => {
    const fn = (acc, element) => {
        if (!Object.hasOwn(acc, element[prop]))
            acc[element[prop]] = [];
        acc[element[prop]].push(element);
        return acc;
    }
    return arr.reduce(fn, {});
}
export default groupBy;
// END