class user {

    constructor(username) {
        this.username = username;
    }

    logme() {
        console.log(`username is${this.username}`);
    }
}


class Teacher extends user {

    constructor(username, email,password) {
        super(username)    
        this.email = email;
        this.password = password;
    }

    addcourses(){
        console.log(`A new course was Added by ${this.username}`);
    }
    
}


const user1 = new Teacher('Ankit','ankit@gmail.com','@12345');
user1.addcourses(); 
console.log(user1.email);

const user2 = new user("Rohit");
user2.logme();
console.log();
