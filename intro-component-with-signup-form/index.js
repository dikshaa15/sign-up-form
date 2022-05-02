const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const smallFirstName = document.querySelector('.firstname');
const smallLastName = document.querySelector('.lastname');
const smallEmail = document.querySelector('.email');
const smallPassword = document.querySelector('.password');
const icon = document.querySelector('.icon');
const iconLastName = document.querySelector('.icon__lastname');
const iconEmail = document.querySelector('.icon__email');
const iconPassword = document.querySelector('.icon__password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fName = firstname.value;
  const lName = lastname.value;
  const emailVal = email.value;
  const passwordVal = password.value;

  console.log(fName, lName, emailVal, passwordVal);

  // check if it is a valid First Name
  if (fName === '') {
    icon.classList.add('error');
    smallFirstName.classList.add('error');
  } else {
    icon.classList.remove('error');
    smallFirstName.classList.remove('error');
  }

  // check if it is a valid Last name
  if (lName === '') {
    iconLastName.classList.add('error');
    smallLastName.classList.add('error');
  } else {
    iconLastName.classList.remove('error');
    smallLastName.classList.remove('error');
  }

  // check if it is a valid Email
  if (!validateEmail(emailVal) || emailVal === '') {
    iconEmail.classList.add('error');
    smallEmail.classList.add('error');
  } else {
    iconEmail.classList.remove('error');
    smallEmail.classList.remove('error');
    email.value = '';
  }

  // check if it is a valid Password
  if (passwordVal === '') {
    iconPassword.classList.add('error');
    smallPassword.classList.add('error');
  } else {
    iconPassword.classList.remove('error');
    smallPassword.classList.remove('error');
  }
});

// Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
