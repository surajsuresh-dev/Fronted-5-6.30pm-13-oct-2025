
//object Inhertence using Object.create()

let u1 = {
    name: "jhon",
    email : "jhon@gmail.com"
}

let u2 = Object.create(u1, {
    age :{
            value : 22
    },
    mobile: {
        value: "9900887766"
    }
})


let u3 = Object.create(u2, {
    city :{
            value : "bengluru"
    },
    isUser: {
        value : true
    }
})


console.log(`u3 =`,u3)