import { navBar } from "/components.js";
document.getElementById("nav-container").innerHTML = navBar();
import { getData, displayData, searchScroll } from "/scriptTotal.js";
let url = `https://www.themealdb.com/api/json/v1/1/random.php`;
let data = getData(url);
let finalData = await data;
console.log(finalData.meals);
let conSearchBar = document.getElementById("search-display");
displayData(finalData.meals, conSearchBar);
