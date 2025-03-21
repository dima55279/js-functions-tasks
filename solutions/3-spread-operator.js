// BEGIN
const convert = (...dates) => {
    const newDates = []
    dates.map((date) => {
        const [year, month, day] = date;
        const tempDate = new Date(year, month, day);
        newDates.push(tempDate.toDateString())
    });
    return newDates;
}
export default convert;
// END