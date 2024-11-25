console.log('FrontEnd JS is active');

function itemTepmlate(item) {
    return `<li 
            class="list-group-item list-group-item-info d-flex align-items-center justyfy-content-between">
            <span class="item-text">${item.reja}</span>
            <div>
              <button 
              data-id="${item_id}" 
              class="edit-me btn btn-secondary btn-sm mr-1">
                 O'zgartirish
              </button>
              <button 
              data-id="${item_id}"  
              class="delete-me btn btn-danger btn-sm">
              O'chirish
              </button>
            </div>
          </li>`;
}

let createField = document.getElementById('create-field');

document
.getElementById('create-form')
.addEventListener('submit', function (e) {
 e.preventDefault();

axios 
 .post("/create-item", { reja: createField.value })
 .then((response) => {
    document
    .getElementById('item-list')
    .insertAdjacentHTML("beforeend", itemTepmlate(response.data));
    createField.value = "";
    createField.focus();
 })
 .catch((err) => {
     console.log('Please try again');
  });

});