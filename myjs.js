let firstName = 'Nikola'
let lastName = 'Dimitrijevic'
let imageUrl = 'http://i0.wp.com/cdn.techgyd.com/save-whatsapp-profile-picture-image3.jpg?resize=337%2C337'

let attendees = [
  { firstName: 'obj1 Fname', lastName: 'ob1 Lame', email: 'obj1 @', dateBirth: 'obj1 date' },
  { firstName: 'obj2 pera', lastName: 'ob2 lazic', email: 'obj2 test@test', dateBirth: '13/12' },
];

function setupCredentials(){
  let credOne = document.getElementById('first-name-cred');
  let credTwo = document.getElementById('last-name-cred');
  let credImage = document.getElementById('image');

  credOne.innerText = firstName;
  credTwo.innerText = lastName;
  credImage.src = imageUrl;
}

function addAttendeeHtml(){
  for (let i = 0; i < attendees.length; i++){
    if(attendees[i] == attendees.length){
    let attendee = attendees[i];
    addAttendeeToTable(attendee.firstName, attendee.lastName, attendee.email, attendee.dateBirth)
    }
  }
}


function showAddAttendeeForm(){
  let formElem = document.getElementById('add-attendee');
  formElem.style.display = 'block';
}

function addAttendee(){

  let first = document.getElementById('first-name-entry').value;
  let lastName = document.getElementById('last-name-entry').value;
  let email = document.getElementById('email-entry').value;
  let date = document.getElementById('date-entry').value;

  attendees.push({ firstName: first, lastName: lastName, email: email, dateBirth: date })
  addAttendeeToTable(first, lastName, email, date);

  let formElem = document.getElementById('add-attendee');
  formElem.style.display = 'none';
}

function addAttendeeToTable(firstName, lastName, email, dateOfBirth) {
   let foundTables = document.getElementsByTagName('table');
   if (foundTables.length < 1) throw 'No table found';

  // pristup elementu table koj je u nizu:  index [0]
   let table = foundTables[0];
   let tr = document.createElement('tr');
   let firstNameCell = document.createElement('td'),
     firstNameText = document.createTextNode(firstName);
  firstNameCell.appendChild(firstNameText);

   let lastNameCell = document.createElement('td'),
     lastNameText = document.createTextNode(lastName);
  lastNameCell.appendChild(lastNameText);

   let emailCell = document.createElement('td'),
     emailText = document.createTextNode(email);
   emailCell.appendChild(emailText);

   let dateCell = document.createElement('td'),
      dateText = document.createTextNode(dateOfBirth);

  dateCell.appendChild(dateText);

   tr.appendChild(firstNameCell)
   tr.appendChild(lastNameCell)
   tr.appendChild(emailCell)
   tr.appendChild(dateCell)

   table.appendChild(tr)

}

function setupTable(){
  for (let i = 0; i < attendees.length; i++){
    let attendee = attendees[i];
    addAttendeeToTable(attendee.firstName, attendee.lastName, attendee.email, attendee.dateBirth)
  }
}


setupCredentials();
setupTable();
