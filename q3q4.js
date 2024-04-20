/**
Please write down a function is used to create an array of unique values.
Example:
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1,
3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
output: [1, 5, 2, 3, 4, 7, 8, 9, 0, 6]
**/
function getUniqueNumber(items) {
  const set = new Set();

  const uniqueNumbers = [];

  for (const number of items) {
    if (set.has(number)) {
      continue;
    }

    set.add(number);
    uniqueNumbers.push(number);
  }

  return uniqueNumbers;
}

console.log(
  getUniqueNumber([
    1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1,
  ])
);

/** Can you explain about Interface and Enum, and where will you be using,
please make some examples. **/
/**
 * Interfaces describes shapes of objects or classes, while Enums are set of values.
 * For instance, interface IUser {
 *  firstName: string,
 *  lastName: string,
 *  profession: ProfessionEnum
 * }
 * 
 * enum ProfessionEnum {
 *  SystemAnalytics: 'systemAnalytics',
    Engineer: 'engineer',
    ProductOwner: 'productOwner',
    Freelancer: 'freelancer',
    Student: 'student',
 * }
 * 
 * By defining enums, we can abstract what the actual values are (if they are very long), and if we change the values in
 * the future, we only need to update 1 place
 */
