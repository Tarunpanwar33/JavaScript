class User {

    constructor(name, email, password, address) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
    }

    get password() {
        return `${this._password.toUpperCase()}#*2@`;
    }

    set password(value) {
        this._password = value;
    }

    get email() {
        return `${this._email}`;
    }
    set email(email) {
        this._email = email;
    }

    get _address(){
        return `${this._address}`;
    }

    set _address(add){
        this._address = add;
    }
}



const user = new User('Sawan', 'sawan@email.com', 'sawan123','Mumbai');
console.log(user.password);
console.log(user.email);
console.log(user.address);