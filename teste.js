const allowedUsers = {
    tim: "bla bla",
    tania: "bla bla"
}

function login(user) {
    if (allowedUsers.hasOwnProperty(user)) {
        console.log("Allowed");
    } else {
        console.log("Not allowed");
    }
}


// Now let's check if the login function is affected by prototype pollution
login("tim"); // Output: Allowed
