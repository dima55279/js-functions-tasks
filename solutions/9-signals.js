import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (arr) => {
  const countOfEmails = {};
  if (arr.filter((email) => email.includes(freeEmailDomains[0])).length > 0)
    countOfEmails[freeEmailDomains[0]] = arr.filter((email) => email.includes(freeEmailDomains[0])).length;
  if (arr.filter((email) => email.includes(freeEmailDomains[1])).length > 0)
    countOfEmails[freeEmailDomains[1]] = arr.filter((email) => email.includes(freeEmailDomains[1])).length;
  if (arr.filter((email) => email.includes(freeEmailDomains[2])).length > 0)
    countOfEmails[freeEmailDomains[2]] = arr.filter((email) => email.includes(freeEmailDomains[2])).length;
  if (arr.filter((email) => email.includes(freeEmailDomains[3])).length > 0)
    countOfEmails[freeEmailDomains[3]] = arr.filter((email) => email.includes(freeEmailDomains[3])).length;
  return countOfEmails;
}
export default getFreeDomainsCount;
// END