async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function displayData(data, container) {
  console.log(data, container);
  container.innerHTML = " ";

  if (data.length == undefined) {
    let data1 = [];
    data1.push(data);
    data = data1;
  }
  data.forEach((el) => {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.strMealThumb;
    var name = document.createElement("p");
    name.innerHTML = `${el.strMeal}`;
    var category = document.createElement("p");
    category.innerHTML = `Category: ${el.strCategory}`;
    var youtube = document.createElement("p");
    youtube.innerHTML = `Cooking video: <a href=${el.strYoutube} target="_blank" >YouTube Link `;
    div.append(img, name, category, youtube);
    container.append(div);
  });
}

let searchScroll = (data, container) => {
  container.innerHTML = "";
  container.style.display = "block";
  data.forEach((el) => {
    const { strMeal } = el;
    var div = document.createElement("div");

    var name = document.createElement("p");
    name.innerHTML = `${strMeal}`;
    div.addEventListener("click", () => {
      let conSearchBar = document.getElementById("search-display");
      container.style.display = "none";
      displayData(el, conSearchBar);
    });
    div.append(name);
    container.append(div);
  });
};

export { getData, displayData, searchScroll };
