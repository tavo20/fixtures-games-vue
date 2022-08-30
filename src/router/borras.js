const dates = [
    '2019-01-02',
    '2019-01-01',
    '2019-01-04',
    '2019-01-03',
    '2019-01-05',
];

let date = '2019-01-02';

// format day
date = date.split('-');
console.log(date);

// order dates by ascending order
const orderedDates = dates.sort((a, b) => {
    return new Date(a) - new Date(b)
});

console.log(orderedDates);

const arrayTest = [
    // 'c',
    // 'B',
    8,
    // 'a',
    // 'D',
    2,
    70,
    -4,
]
console.log(arrayTest.sort((a, b) => {
    console.log(a, b, a - b );
    return b - a 
}))