// BEGIN
const getChildren = (arr) => {
    const children = [];
    arr.map((person) => {
        children.push(person.children);
    });
    return children.flat(Infinity);
}
export default getChildren;
// END