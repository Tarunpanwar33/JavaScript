let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => {
  return num > 4;

});
console.log(newNums);

let Mytable = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const table = Mytable.filter((tab) => {
  return tab < 8;
})
console.log(table);
const newNums1 = []
Mytable.forEach((num) => {
  if (num <= 10) {
    newNums1.pop(num)
  }
})


let oddno = [1, 3, 5, 7, 9];
let cheak = oddno.filter((final) => {
  return final < 9;
})

console.log(cheak);


const books = [
  {
    title: 'bookone', genre: 'fiction', publish: '1981',
    edition: '2004'

  },
  {
    title: 'booktwo', genre: 'history', publish: '1950',
    edition: '2006'
  },
  {
    title: 'bookthree', genre: 'Economics', publish: '1951',
    edition: '2008'
  },
  {
    title: 'bookfour', genre: 'mathametics', publish: '1991',
    edition: '20016'
  }
]


const userbooks = books.filter((bk) => bk.genre === 'history')
console.log(userbooks);


const mobiles = [
  {
    modelname: '3pro', yom: '2018', company: 'realme'
  },
{
  modelname: '23ultra', yom: '2022',  company: 'samsung'
},
{
  modelname: 'y30', yom: '2020', company: 'vivo'
},
{modelname: '5pro', yom: '2018', company: 'redme'},
{
  modelname: '9pro', yom: '2024', company: 'realme'
}
]; 