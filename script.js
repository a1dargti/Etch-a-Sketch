let grid = 16;
let btn = document.querySelector("button");
let test = document.querySelector("#test");
const container = document.querySelector(".wrapper");
btn.addEventListener("click", function () {
  let grid = prompt("Введите число");
  if (grid <= 100 && grid > 2) {
    gridfn(grid);
  } else {
    alert("Please enter number between 2 and 100");
  }

  console.log(grid);
});
function gridfn(grid) {
  container.innerHTML = "";
  const wrapper = document.querySelector(".wrapper");
  for (let i = 0; i < grid; i++) {
    const col = document.createElement("div");
    wrapper.appendChild(col);
    col.classList.add("grid");

    for (let j = 0; j < grid; j++) {
      const row = document.createElement("div");
      col.appendChild(row);
      row.classList.add("gridItem");
      row.addEventListener("mouseenter", function () {
        row.classList.add("gridItemActive");
      });
    }
  }
}

gridfn(grid);
