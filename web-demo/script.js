function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "" || password === "") {
        message.innerText = "Please fill all fields.";
        message.style.color = "red";
    } 
    else if (password !== "admin"){
        message.innerText = "Incorrect password.";
        message.style.color = "red";
    }
        else {
        message.innerText = "Login Successful!";
        message.style.color = "green";
    }

}