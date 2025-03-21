import _ from 'lodash';

// BEGIN
const average = (...numbers) => {
    if (numbers.length === 0)
        return null;
    return _.sum(numbers) / numbers.length;
}
export default average;
// END