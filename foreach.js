const coding = ["js", "ruby", "java", "python"];
/*coding.forEach((value)=> {
    console.log(value);
})*/

function printime(item) {
    console.log(item);
}

coding.forEach(printime)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

let coding1 = [
    {
        languagName: 'javascript',
        Extension: '.js',

    },
    {
        languagName: 'java',
        Extension: '.java'
    },

    {
        languagName: 'Python',
        Extension: '.python'
    },


]

coding1.forEach((item) => {
    console.log(item.languagName, item.Extension);
});



let states = [
    {
        name: 'Dehradun',
        capital: 'uttrakhand',
        code: 'uk'
    },
    {
        name: 'delhi',
        capital: 'delhi',
        code: 'dl'

    },
    {
        name: 'chandigarh',
        capital: 'chandigarh',
        code: 'ch'
    },
    {
        name: 'Mumbai',
        capital: 'Maharasta',
        code: 'MH'
    }

]

states.forEach((all) => {
    console.log(all.code, all.capital, all.name);
})


const values = coding.forEach((item) => {
    console.log(item);
    return item;
})

console.log(values);
