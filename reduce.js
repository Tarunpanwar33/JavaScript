const mynums = [1,2,3,4,5];
const myTotal =  mynums.reduce(function (acc,curval) {
    console.log(`acc${acc} and curruntvalue : ${curval}`);
    return acc+curval;
},0)
console.log(myTotal);
const accval = 0;
const total = mynums.reduce((acc,currval)=>acc+currval,)
console.log(total);

const courses = [
    {
        sub : "Javascript",
        cost : 2000

    },


    {
        sub : "Java",
        cost : 3999
    },

   {

    sub : "J2ee",
    cost : 5999
   },

   {
    sub : "MySql",
    cost : 1999
   }

]
console.log(courses);

 let totalprice = courses.reduce((accum,item)=>accum+item.cost,0)
console.log(totalprice);

let odd = [2,4,6,8,10,12];
 let total1 = odd.reduce((accum,curruntval)=>accum+curruntval,0);
 console.log(total1);