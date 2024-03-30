console.log(Math.PI);
// we can't change 
Math.PI = 5;
console.log(Math.PI);

const discriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(discriptor);

const offlinecourses = {
    name: 'Js',
    price: 10000,
    IsAvilable: true,
    function () {
        console.log("courses are avilable");
    }
}
console.log(Object.getOwnPropertyDescriptor(offlinecourses));

console.log(Object.getOwnPropertyDescriptor(offlinecourses, 'price'));
 Object.defineProperty(offlinecourses,'name',{
   Writable : true,
    enumerable : true,
  configurable : true

 })

for (const [key,value] of Object.entries(offlinecourses)) {
    if (typeof value!=='function') {
        console.log(`${key}:${value}`);
    }
   
}
