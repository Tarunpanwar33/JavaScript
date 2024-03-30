const login = {
    _username :'tarun123',
    _password :'tarun@1276',

       get username (){
        return  this._username.toUpperCase();
    },

    set username(value){
         this._username = value;

    }


}


 const use  = Object.create(login);
 console.log(use.username);