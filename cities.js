import $ from "jquery";
import { getStreets } from "./street";
import { printError } from "./utils";

let cities;
const city_name_key = "שם_ישוב";
const data = {
  resource_id: "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba", // the resource id
  limit: 1300 // get 5 results
};

const citiesSelect = document.getElementById("city");
const citiesSelectInput = document.getElementById("cityId");

$(document).ready(getCities);

citiesSelectInput.addEventListener("change", afterCityChoose);

function getCities() {
  $.ajax({
    url: "https://data.gov.il/api/3/action/datastore_search",
    type: "GET",
    data: data,
    dataType: "json",
    success: onSuccessCities,
    error: printError
  });
}
function onSuccessCities(data) {
  cities = data.result.records;
  cities = cities.map((city) => city[city_name_key]);
  cities.shift(); // To delete the first arry[0] because לא רשום
  for (let i = 0; i <= cities.length; i++) {
    const record = cities[i];
    console.log(record);

    const opt = document.createElement("option");
    opt.value = record;
    citiesSelect.appendChild(opt);
  }
}
function afterCityChoose(e) {
  const input = e.target.value;
  if (cities.includes(input)) {
    getStreets(input);
    citiesSelectInput.classList.remove("invalid");
    citiesSelectInput.classList.add("valid");
  } else {
    citiesSelectInput.classList.remove("valid");
    citiesSelectInput.classList.add("invalid");
  }
}
