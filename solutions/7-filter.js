// BEGIN
const getGirlFriends = (arr) => {
    const girls = [];
    arr.map((person) => girls.push(person.friends.filter((friend) => friend.gender === "female")));
    return girls.flat(Infinity);
}
export default getGirlFriends;
// END