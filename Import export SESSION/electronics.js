import navbar from "./components/navbar.js";
// console.log("navbar:", navbar);
//navbar()
import { getData, appendData } from "./scripts/showdata.js";

//reference to div
let navbar_div = document.getElementById("navbar-container");

//setting the html
navbar_div.innerHTML = navbar();

let url = "https://fakestoreapi.com/products/category/electronics";
let res = await getData(url);

//  console.log("res:", res);
let parent = document.getElementById("data")
appendData(res, parent);
