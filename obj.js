function multipleBy5(num) {
    this.num = num;
    return num * 5
}

multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
    this.username = username;
}

createUser.prototype.printMe = function () {
    console.log(`score is${this.score}`);
    console.log(`username is ${this.username}`);
}
const js = new createUser('Javascript', 2999);
const java = new createUser('Java', 3500);

js.printMe()
js.printMe()