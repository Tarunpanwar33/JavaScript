function user(email, password) {
    this.email = email;
    this.password = password

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this.email = value;
        }
    });

    const user1 = new user('tarunpanwar479@gmail.com','tarun999');
    console.log(user1.email);
}