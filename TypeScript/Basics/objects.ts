let apiRespose = {
    name: "Ashraf",
    id: 1,
    userInfo: {
        email: "ashraf@test.com",
        phone: "1234567890"
    }
}

let apiRespose2 = {
    age: 30
}


let mergedResponse = {
    ...apiRespose, ...apiRespose2
}

console.log(mergedResponse);

console.log(apiRespose.userInfo.email);

type UserInfo = {
    email: string,
    phone: string
}

let user1: UserInfo = {
    email: "ashraf@test.com",
    phone: "1234567890"
}


