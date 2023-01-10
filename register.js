window.checkForm = checkForm;

function checkForm() {
  let form = document.getElementById("form");
  let pasIn = document.getElementById("passwordInput");
  let fNameInput = document.getElementById("fNameInput");
  let lNameInput = document.getElementById("lNameInput");
  let city = document.getElementById("cityId");
  let street = document.getElementById("streetId");
  let phoneInput = document.getElementById("phoneInput");
  let emailInput = document.getElementById("emailInput");
  let file = document.getElementById("file");

  if (pasIn.value.search(/[a-z]/) < 0) {
    alert("הסיסמה חייבת לכלול אותיות באנגלית");
    return false;
  } else if (pasIn.value.search(/[A-Z]/) < 0) {
    alert("הסיסמה חייבת לכלול אות גדולה!");
    return false;
  } else if (pasIn.value.length < 8) {
    alert("הכנס סיסמה ארוכה מ 8 תווים בבקשה!");
    return false;
  } else if (pasIn.value.length > 15) {
    alert("הסיסמה ארוכה מידי, הכנס סיסמה עד 15 תווים!");
    return false;
  }
  if (file.value === "") {
    alert("לא הכנסת תמונות פרופיל!");
    return false;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    localStorage.setItem("first name", fNameInput.value);
    localStorage.setItem("last name", lNameInput.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("street", street.value);
    localStorage.setItem("phone", phoneInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", pasIn.value);

    window.location.href = "next.html";
  });
}
