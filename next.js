let firstName = localStorage.getItem("first name");
let lastName = localStorage.getItem("last name");
let cityName = localStorage.getItem("city");
let streetName = localStorage.getItem("street");
let phoneNumber = localStorage.getItem("phone");
let email = localStorage.getItem("email");
let password = localStorage.getItem("password");
let image = localStorage.getItem("img");
// let url = localStorage.getItem("url");

document.getElementById("fNameValue").innerHTML = firstName;
document.getElementById("lNameValue").innerHTML = lastName;
document.getElementById("cityValue").innerHTML = cityName;
document.getElementById("streetValue").innerHTML = streetName;
document.getElementById("phoneValue").innerHTML = phoneNumber;
document.getElementById("emailValue").innerHTML = email;
document.getElementById("passwordValue").innerHTML = password;
document.getElementById("image").setAttribute("src", image);
