const bio = {
    name :'Tarun',
    age : 26,
    Address :'Dehradun',
    Mobno : 7505934782,
    
    getbio :function () {
        console.log(`username:${this.name}`);
    }
    
}
console.log(bio);
console.log(bio.getbio());

//====================================================================================

function Bio(name,age,Address,Mobno) {
    this.name = name;
    this.age = age;
    this.Address = Address
    this.Mobno = Mobno;
    
    this.msg = function () {
        console.log(`welcome to ${this.name}`);
    }
    return this;
}
  const acess =  new Bio('Aman',26,'Noida','7500059881');
 const acess_again = new Bio('Tarun',26,'Dehradun','7505934782')
 console.log(acess);
    console.log( acess_again);
