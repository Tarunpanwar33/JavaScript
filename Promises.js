const promisetwo = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve()
        console.log("Async Task");
    }, 1000)
})

promisetwo.then(() => {
    console.log("promise completed");
})



new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
        console.log("Async Task 2");
    }, 1000)
}).then(() => {
    console.log("Async2 Resolved");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'Tarun', Password: 'tarun@1234' })
    }, 1000)
}).then((user) => {
    console.log(user);
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'tarun', Password: 'tarun@1234' })
        } else {
            console.log("Error : something went wrong");
        }
    }, 1000)
})
    .then((user) => {
        console.log(user.username);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(() => {
        console.log(error);
    }).finally(() => console.log("Either the Promise is Resolve / Rejected"));


const promise_five = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'javascript', Password: 'tarun@1234' })
        } else {
            console.log("Error : Js went wrong");
        }
    }, 1000)
})

async function consumepromisefive() {
    try {
        const response = await promise_five
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}
consumepromisefive();

async function getAlluser() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = response.json();
        console.log(data);

    } catch (error) {
        console.log('E : ', error);
    }
}
getAlluser();

let pro = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve();
        console.log("Async Promise");
    }, 1000)

}).then(() => {
    console.log("Prmoise solved");
})

// second way...

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        console.log("Async promise 2 ");
    }, 1000);
}).then(() => {
    console.log("Promise completed");
});

// third way........

const promise3 = new Promise((reject, resolve) => {

    setTimeout(() => {
        const error3 = true;

        if (!error3) {
            resolve({ username: 'Tarun', Password: 'tarun@1234' })
            console.log(promise3.username);
        } else {
            console.log("Error : Something went Wrong1");
        }
    }, 1000);
})
    .then((user) => {
        console.log(user.username);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    }).catch(() => {
        console.log(error3);
    })
    .finally(() => {
        console.log("Either promise is Resolve || Rejected");
    })
