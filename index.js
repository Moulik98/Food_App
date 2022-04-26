import { navBar } from "/components.js";
document.getElementById("nav-container").innerHTML = navBar();

import { getData, displayData, searchScroll } from "/scriptTotal.js";

let dataInput = document.getElementById("searchVal");
dataInput.addEventListener("keyup", () => {
  if (timer == "true") {
    clearTimeout(timer);
  }
  var timer = setTimeout(() => {
    mainVal();
  }, 1000);
});
async function mainVal() {
  let val = document.getElementById("searchVal").value;
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`;
  let data = getData(url);
  let finalData = await data;
  let conSearchBar = document.getElementById("search-display");

  let conSearchScroll = document.getElementById("searchDropDown");
  if (finalData != undefined) {
    console.log(finalData);
    searchScroll(finalData.meals, conSearchScroll);
    displayData(finalData.meals, conSearchBar);
  } else {
    console.log("Not found");
  }
}
