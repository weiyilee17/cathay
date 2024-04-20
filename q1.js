/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',
profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital
numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’,
‘engineer’ or ‘systemAnalytics’.
**/

/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’)
to sort this array and print it out.
**/
function sortUserName(users) {
  users.sort((a, b) => {
    if (a.firstName.localeCompare(b.firstName)) {
      return a.firstName.localeCompare(b.firstName);
    }
    if (a.lastName.localeCompare(b.lastName)) {
      return a.lastName.localeCompare(b.lastName);
    }

    return a.customerID.localeCompare(b.customerID);
  });

  return users;
}

let fixture1 = [
  { firstName: 'Jone', lastName: 'Smith', customerID: '007', note: '', profession: 'systemAnalytics' },
  { firstName: 'Jane', lastName: 'Doe', customerID: '001', note: '', profession: 'engineer' },
  { firstName: 'John', lastName: 'Doe', customerID: '003', note: '', profession: 'productOwner' },
  { firstName: 'John', lastName: 'Doe', customerID: '002', note: '', profession: 'student' },
  { firstName: 'John', lastName: 'Smith', customerID: '006', note: '', profession: 'freelancer' },
  { firstName: 'Jane', lastName: 'Smith', customerID: '004', note: '', profession: 'productOwner' },
  { firstName: 'Jane', lastName: 'Smith', customerID: '005', note: '', profession: 'freelancer' },
  { firstName: 'Jane', lastName: 'Doe', customerID: '000', note: '', profession: 'student' },
];

// console.log(sortUserName(fixture1));

/**
 Q2. Please sort by ‘profession’ to follow the principle.
 (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >
  ‘student’’)
  **/

function sortByType(users) {
  const professionWeightMap = new Map([
    ['systemAnalytics', 0],
    ['engineer', 1],
    ['productOwner', 2],
    ['freelancer', 3],
    ['student', 4],
  ]);
  users.sort((a, b) => {
    return professionWeightMap.get(a.profession) - professionWeightMap.get(b.profession);
  });

  return users;
}
console.log(sortByType(fixture1));
