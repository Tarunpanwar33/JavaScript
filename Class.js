 class User{
 }
//     constructor(username,email,password){
//     this.name = username;
//     this.email = email;
//     this.password = password;

//     }
//        encryptPassword(){
//      return`${this.password}abc`

//    }

//   /* changeUsername(){
//     return`${this.changeUsername.toUpperCase()}`
//    }
// */



// }

// const user = new User('tarunpanwar','tarun@gmail.com','tarun@1234')
// console.log(user.encryptPassword());
// console.log(user.changeUsername());
 
//================================================================================

function User1 (username,email,password){
    this.name = username;
    this.email = email;
    this.password = password;

    }

    User1.prototype.encryptPassword = function () {
        return`${this.password}abc`
    }
    const use = new User1('arun','arun@gmail.com','arun@1234');
    console.log(use.email);
    console.log(use.name);