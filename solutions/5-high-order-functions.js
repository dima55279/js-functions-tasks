import _ from 'lodash';

// BEGIN
const takeOldest = (arr, numbers = 1) => {
    const oldestPerson = [];
    const temp = _.sortBy(arr, (person) => Date.parse(person.birthday));
    temp.map((person) => {
        if (oldestPerson.length < numbers) {
            oldestPerson.push(person);
        }
    })
    return oldestPerson;
}
export default takeOldest;
// END