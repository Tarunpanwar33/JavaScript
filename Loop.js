for (let i = 0; i <= 15; i++) {
    while (i == 7) {

        console.log(i);
        break;
    }

}


var iphone = 6;
do {
    console.log(iphone);
    iphone++;
} while (iphone <= 13);


const item = ['apple', 'banana', 'cherry'];
for (const items of item) {
    console.log(items);
}

const shoppingcart = {
    banana: 2,
    apple: 5,
    chery: 0
};
for (const fruit in shoppingcart)
    console.log(shoppingcart[fruit]);

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}
const map = new Map();
map.set('in ', 'india');
map.set('bz', 'brazil');
map.set('nw', 'new');
map.set('fr', 'france');
console.log(map);
for (const [key, value] of map) {
    console.log(key, value);
}
const cars = new Map();
cars.set('suzuki', 'swift');
cars.set('hyundai', 'i10');
cars.set('wlokswegan', 'polo');
cars.set('totyota', 'fortuner')
//console.log(cars);
for (const [key, value] of cars) {
    console.log("brand =>" + key, ":model=>" + value);
}


const fruits = new Map();
fruits.set('1', 'apple');
fruits.set('2', 'Mango');
fruits.set('3', 'Banana');
fruits.set('4', 'grapes');
fruits.set('5', 'guwawa');
for (const [key, value] of fruits) {
    console.log(key, value);
}

const myobj = {
    js:'javascript',
    cpp : 'c++',
    ror :'rubyonrails',
    jv : 'java'

}

for (const key in myobj) {
   console.log(key,myobj[key]);
 //console.log(`${key}shorcut is for ${myobj[key]}`);
        
    }

    const states = {
        uk:'uttrakhand',
        jh:'jharkhand',
        mp :'Madhyapradesh',
        dl:'delhi'
    }
        console.log(states);
        for (const key in states) {
           console.log(`${key} stands for ${states[key]}`);
        }
        
       
         

        const programming = ['java','javascript','c++','c#'];
        for (const key in programming) {
           console.log(programming[key]);
        } 
        
        