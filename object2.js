//singleton object
//const tinderuser  = new Object();
//console.log(tinderuser);


//non-singlton object
//console.log(tinderuser);

const tinderuser = {};
tinderuser.id = '123abc'
tinderuser.name = 'Tarun'
tinderuser.isLoggedIn = false;

//console.log(tinderuser);
const regular_user = {
    email: 'tarun@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'Tarun',
            lastname: 'Panwar'
        }
    }
}

console.log(regular_user.fullname.userfullname.firstname);

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }
const obj4 = { 5: 'a', 6: 'b' }
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

console.log(regular_user.keys(tinderuser));
console.log(regular_user.values(tinderuser));
console.log(object.entries(tinderuser));
c