function sayHello(name,age) {
    return console.log(`Hello ${name}, Are you ${age} years right`);
}

function action(name,age,callback) {
    return callback(name,age)
}

action("Ho Thi Kieu",20,sayHello)

function fetchData() {
    return new Promise((result,reject)=>{
        setTimeout(()=>{
            const data={message:"Welcome to PNV"}
            result(data)
        },5000)
    })
}

fetchData().then((result)=>{
    console.log(`Hello `,result.message);
})
.catch((error)=>{
    console.error(error.message);
})