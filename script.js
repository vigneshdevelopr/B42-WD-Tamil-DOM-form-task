const mains = document.createElement('div')
mains.innerHTML+=`
<form class="form-group" id="form" name="Biodata" novalidate>
<div class="container">

<h1 id="title">Form and Table</h1>
<p id="description" style="text-align: center;" >This Form about to know information about the Customer Who book Our Hotel</p>

      <div class="form-row">
        <div class="col-md-6 mb-3 FirstNameEl">
          <label for="first-name">First name</label>
          <input type="text" class="form-control" id="first-name" required name="FirstName" placeholder="Enter Your First Name" required>
          <div class="valid-feedback">
            Looks good!
          </div>
          <div class="invalid-feedback">
            Please select a valid value.
          </div>
        </div>
        
        <div class="col-md-6 mb-3">
          <label for="last-name">Last name</label>
          <input type="text" class="form-control" id="last-name" name="LastName" placeholder="Enter Your Last Name" required>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="address">Address</label>
          <input type="textarea" class="form-control" id="address" name="Address" placeholder="Enter Your Address" required>
          <div class="invalid-feedback">
            Please provide a valid Address.
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label for="state">State</label>
          <input type="textarea" class="form-control" id="state" name="State" placeholder="State" required>
          <div class="invalid-feedback">
            Please provide a valid State.
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="countries">Country</label>
          <input type="text" class="form-control" id="countries" name="Country" placeholder="Country" required>
  
          <div class="invalid-feedback">
            Please select a valid Country.
          </div>
        </div>
        <div class="col-md-3 mb-3" >
          <label for="pin">Pincode</label>
          <input type="text" class="form-control" id="pin" name="Pincode" placeholder="Pincode" required>
          <div class="invalid-feedback">
            Please provide a valid Pincode.
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="gender">Gender:</label><br>
      <input type="radio" id="male" name="gender" value="male" >
      <label for="male">Male</label><br>
      <input type="radio" id="female" name="gender" value="female">
      <label for="female">Female</label><br>
      <input type="radio" id="other" name="gender" value="other">
      <label for="other">Other</label><br><br>
          <div class="invalid-feedback">
            Please select a valid value.
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-3" id="validationCustom08">
        <label for="food">Choice of Food:</label><br>
        <input type="checkbox" id="Indian" name="food" value="Indian">
        <label for="Indian">Indian</label><br>
        <input type="checkbox" id="Chinese" name="food" value="Chinese">
        <label for="Chinese">Chinese</label><br>
        <input type="checkbox" id="Italian" name="food" value="Italian">
        <label for="Italian">Italian</label><br>
        <input type="checkbox" id="American" name="food" value="American">
        <label for="American">American</label><br>
        <input type="checkbox" id="Korean" name="food" value="Korean">
        <label for="Korean">Korean</label><br><br>
      </div>
      <button class="btn btn-primary" type="submit">Submit form</button>
    </form>
  
    
  
  <div class="table-responsive">
  <table class="table" id="table">
  <thead>

  <tbody>
      <tr>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Address</th>
        <th scope="col">Pincode</th>
        <th scope="col">Gender</th>
        <th scope="col">Food</th>
        <th scope="col">State</th>
        <th scope="col">Country</th>
  
      </tr>
    </tbody>
    </thead>
  </table>
  
  </div>
  </div>`
document.body.append(mains);










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
