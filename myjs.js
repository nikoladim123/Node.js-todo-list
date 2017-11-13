
let firstName = 'Nikola'
let lastName = 'Dimitrijevic'
let imageUrl = 'http://i0.wp.com/cdn.techgyd.com/save-whatsapp-profile-picture-image3.jpg?resize=337%2C337'

let attendees = [
  { firstName: "obj1 pera", lastName: "ob2 c", email: "obj2 test@t", dateBirth: "13/12"},
  { firstName: "obj2 pera", lastName: "ob2 lazic2", email: "obj2 test@t", dateBirth: "13/12"},
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
   let foundTables = document.getElementById("tableID");
   if (foundTables.length < 1) throw 'No table found';

  // pristup elementu table koj je u nizu:  index [0]
   let table = foundTables;
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
  
  let buttonDel = document.createElement("button");
  buttonDel.addEventListener("click", del());
  buttonDel.className ="butDel"
    buttonTxtDel = document.createTextNode("delete");
  buttonDel.appendChild(buttonTxtDel);
  
  let buttonEdit = document.createElement("button");
    buttonEdit.onclick = function(){
  var foredit = document.getElementById("blaa");
  foredit.style.display ="block";
};
  buttonEdit.id = "butEdit"
    buttonTxtEdit = document.createTextNode("Edit");
  buttonEdit.appendChild(buttonTxtEdit);

  

   
   tr.appendChild(firstNameCell)
   tr.appendChild(lastNameCell)
   tr.appendChild(emailCell)
   tr.appendChild(dateCell)
   tr.appendChild(buttonDel)
   tr.appendChild(buttonEdit)
   

   table.appendChild(tr)

}

function setupTable(){
  for (let i = 0; i < attendees.length; i++){
    let attendee = attendees[i];
    addAttendeeToTable(attendee.firstName, attendee.lastName, attendee.email, attendee.dateBirth)
  }
}

function hideForm(){
  var foredit = document.getElementById("blaa");
  foredit.style.display ="none";
}

var ind;
function del(){
  var tableID = document.getElementById("tableID");
 var g = document.getElementsByClassName('butDel');
  
for (var i = 0, len = g.length; i < len; i++)
{

    (function(index){
        g[i].onclick = function(){
          ind = index + 1;
          alert("object at index " + index + " has been deleted"); 
          attendees.splice(index, 1);
          tableID.removeChild(tableID.childNodes[ind+1]);
          
        }
        
    })(i);
  }
}


setupCredentials();
setupTable(); 
del(); 
