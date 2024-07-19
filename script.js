document.addEventListener("DOMContentLoaded", function () {
  let grid = 64;
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
});
