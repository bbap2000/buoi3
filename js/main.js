//Select element function
const SelectElement = function (element) {
	return document.querySelector (element);
};

let menuToggler = SelectElement('.menu-toggle');
let body = SelectElement('body');

menuToggler.addEventListener('click', function () {
	body.classList.toggle('open');
});

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distance: '25rem',
	delay: 300
});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '25rem',
	delay: 600
});

sr.reveal('.animate-top', {
	origin: 'top',
	duration: 1000,
	distance: '25rem',
	delay: 600
});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distance: '25rem',
	delay: 600
});
// code api ramdon user
let api = function() {                      // gọi api
    fetch('https://randomuser.me/api/?results=1')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        data.results.forEach(function (value) {
            const listUser = document.querySelector('.main__ul');
            listUser.appendChild(showUser(value));
        });
        
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

let showUser = function(data) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const img = document.createElement('img')
    const pName = document.createElement('p');
    const pGmail = document.createElement('p');
    const pCell = document.createElement('p');
    const pLocation = document.createElement('p');
    img.setAttribute("src", data.picture.large);
    div.appendChild(img);
    pName.innerHTML = `<b>Full Name:</b> ${data.name.last} ${data.name.first}`;
    div.appendChild(pName);
    pGmail.innerHTML = `<b>Email:</b> ${data.email}`; 
    div.appendChild(pGmail);
    pCell.innerHTML = `<b>Phone Number:</b> ${data.phone}`;
    div.appendChild(pCell);
    pLocation.innerHTML = `<b>Address:</b> ${data.location.street.number}, ${data.location.street.name}, ${data.location.city}, ${data.location.state}, ${data.location.country}`;
    div.appendChild(pLocation);
    li.appendChild(div);
    return li;
}

api()
//data time 

var mydate = new Date();
var dayarray = new Array("Sunday", "Month", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var montharray  = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "Novenber", "December");
document.getElementById("datatime__1").innerHTML = "" + dayarray[mydate.getDay()];
document.getElementById("datatime__2").innerHTML = "" + mydate.getDate()+ " " + montharray[mydate.getMonth()] + " " + mydate.getFullYear();



// validations mail
function validate() {
  var userName = document.getElementById('user');
  var passWord = document.getElementById('password');

  if(userName.value =="" ||passWord.value==""){
    alert("Welcome another quarter!")
  } else {
    
  }

}