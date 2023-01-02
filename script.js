const form = document.getElementById('form');
const table = document.getElementById('table');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const address = document.getElementById('address').value;
  const pincode = document.getElementById('pin').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  var checkboxes = form.querySelectorAll('input[name="food"]');
  var checkedCount = Array.from(checkboxes).filter((food) => food.checked).length;
  if (checkedCount < 2) {
    event.preventDefault();
    alert('Please select at least two options');
  }else{

  var food = [];
  var foodElements = document.querySelectorAll('input[name="food"]:checked');
  for (var element of foodElements) {
    food.push(element.value);
  }
}
  const state = document.getElementById('state').value;
  const country = document.getElementById('countries').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${gender}</td>
    <td>${food.join(', ')}</td>
    <td>${state}</td>
    <td>${country}</td>
  `;

  table.appendChild(row);

  form.reset();
});
