//const { default: axios } = require("axios");
//const { response } = require("../app");

console.log("FrontEnd JS is active");

function itemTepmlate(item) {
  return `<li 
              class="list-group-item list-group-item-info d-flex
              align-items-center justify-content-between">
              <span class="text">${item.reja}</span>
              <div>
                  <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
                      Edit
                  </button>
                  <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
                  </div>
              </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTepmlate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please try again");
    });
});

document.addEventListener("click", function (e) {
  //delete
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq ochirmoqchimisz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Please try again");
        });
    }
  }
  //edit
  if (e.target.classList.contains("edit-me")) {
    alert("you pressed button edit");
  }
});
