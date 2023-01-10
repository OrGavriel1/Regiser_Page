import $ from "jquery";
import { printError } from "./utils";

var data = {
  resource_id: "9ad3862c-8391-4b2f-84a4-2d4c68625f4b", // the resource id
  limit: 5000 // get 5 results,
};
let streets;
const street_name_key = "שם_רחוב";
let streetSelect = document.getElementById("street");
let streetOptInput = document.getElementById("streetId");

streetOptInput.addEventListener("change", afterStreetChoose);

export function getStreets(city) {
  data.q = city;
  $.ajax({
    url: "https://data.gov.il/api/3/action/datastore_search",
    type: "GET",
    data: data,
    dataType: "json",
    success: onSuccessStreets,
    error: printError
  });
}
function onSuccessStreets(data) {
  streets = data.result.records;
  streets = streets.map((street) => street[street_name_key]);
  streetSelect.innerHTML = "";
  for (let i = 0; i <= streets.length; i++) {
    const record = streets[i];

    const opt = document.createElement("option");
    opt.value = record;
    if (!!record && record !== data.q) streetSelect.appendChild(opt);
  }
}

function afterStreetChoose(e) {
  const input = e.target.value;
  if (streets.includes(input)) {
    streetOptInput.classList.remove("invalid");
    streetOptInput.classList.add("valid");
  } else {
    streetOptInput.classList.remove("valid");
    streetOptInput.classList.add("invalid");
  }
}
