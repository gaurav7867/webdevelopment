console.log("Welcome to Programiz!");

async function gaurav(){
    console.log("Inside the gaurav function.");
    const response = await fetch("https://api.github.com/users");
    console.log("Before response.");
    const users = await response.json();
    console.log("Users resolved.")
    return users;
}

console.log("Before Calling Gaurav");
let a = gaurav();
console.log("After Calling.");
console.log("I am a",a);
a.then(data => console.log(data));
console.log("Last line of this file")