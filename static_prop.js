class user {

    constructor(username) {
        this.username = username;

    }
    logme() {
        console.log(`${this.username}`);
    }

   static createId(){
        return `123`;
    }

};

const tarun = new user('tarun');
console.log(tarun.createId());
