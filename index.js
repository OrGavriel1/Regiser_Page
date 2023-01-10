import "./styles.css";

//input
let fNameInput = document.getElementById("fNameInput");
let lNameInput = document.getElementById("lNameInput");
let phoneInput = document.getElementById("phoneInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let visabilityBtn = document.getElementById("visabilityBtn");
let icon = document.getElementById("icon");
let visabilityBtn2 = document.getElementById("visabilityBtn2");
let icon2 = document.getElementById("icon2");
let password2Input = document.getElementById("password2Input");

fNameInput.addEventListener("input", function (event) {
  const inputF = event.target.value;
  if (inputF) {
    fNameInput.classList.remove("invalid");
  }
});
lNameInput.addEventListener("input", function (event) {
  const inputL = event.target.value;
  if (inputL) {
    lNameInput.classList.add("valid");
    lNameInput.classList.remove("invalid");
  } else {
    fNameInput.classList.remove("valid");
    fNameInput.classList.add("invalid");
  }
});

phoneInput.addEventListener("input", function checkPhoneNumber(event) {
  var regex = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
  const inputP = event.target.value;
  const isValid = regex.test(inputP);
  if (isValid) {
    phoneInput.classList.add("valid");
    phoneInput.classList.remove("invalid");
  } else {
    phoneInput.classList.remove("valid");
    phoneInput.classList.add("invalid");
  }
});

emailInput.addEventListener("input", function validateEmail(email) {
  var regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const inputE = email.target.value;
  const validEmail = regEmail.test(inputE);
  if (validEmail) {
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
  } else {
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
  }
});

visabilityBtn.addEventListener("click", togglePassword);
visabilityBtn2.addEventListener("click", togglePassword2);

function togglePassword2() {
  if (password2Input.type === "password") {
    password2Input.type = "text";
    icon2.innerHTML = "visibility_off";
  } else {
    password2Input.type = "password";
    icon2.innerHTML = "visibility";
  }
}
function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.innerHTML = "visibility_off";
  } else {
    passwordInput.type = "password";
    icon.innerHTML = "visibility";
  }
}

password2Input.addEventListener("input", function () {
  if (passwordInput.value === password2Input.value) {
    password2Input.style.outline = "3px solid green";
    document.getElementById("notCorrect").style.visibility = "hidden";
    // phoneValue.innerHTML = event.target.value;
  } else {
    password2Input.style.outline = "3px solid red";
    document.getElementById("notCorrect").style.visibility = "visible";
  }
});

let file = document.getElementById("file");
let image = document.getElementById("image");

file.addEventListener("change", function (e) {
  let imageFile = e.target.files[0];
  if (imageFile) {
    const reader = new FileReader();

    reader.readAsDataURL(imageFile);

    reader.addEventListener("load", function () {
      image.setAttribute("src", reader.result);
      localStorage.setItem("img", reader.result);
    });
  }
});
