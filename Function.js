function print() {
    console.log("Hello from javascript");
}
print();

function myfunction(p1,p2) {
    return p1*p2;
}

  console.log( myfunction(5,7));

// Arrow function..........

  let arr =(fname,lname)=>{
   return fname+lname;
  }
  console.log(arr('Tarun','Panwar'));

  let ano = function() {
    console.log("bhai kya hal hai");
  }
  
  ano();

function out() {
    return function inner(a,b) {
        return a+b;
    }
   console.log(inner(5,7));
}

  console.log(out());

  
  const addtwo = (num1,num2)=>({username :'tarun'})
  console.log(addtwo(2,5));
   
  
