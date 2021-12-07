const myRegisterForm = document.querySelector('.registerForm');
const firstNameInput = document.querySelector('.firsNameInput');
const lastNameInput = document.querySelector('.lastNameInput');
const studentNumberInput = document.querySelector('.studenNoInput');
const emailInput = document.querySelector('.emailInput');
const passwordInput = document.querySelector('.passwordInput');
const formAlert = document.querySelector('.form-alert');
const formButton = document.querySelector('#myButton');

myRegisterForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const studentNumber = studentNumberInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    await axios.post('/api/users/singup', {
      firstName,
      lastName,
      studentNumber,
      email,
      password,
    });
    firstNameInput.value = '';
    lastNameInput.value = '';
    studentNumberInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    formAlert.style.display = 'block';
    formAlert.innerHTML = `Kayıt işlemi Başarılı`;
    formAlert.classList.add('text-success');
    const changePage = () => {
      setTimeout(() => {
        formAlert.style.display = 'none';
        formAlert.classList.remove('text-success');
        window.location.href = '../login.html';
      }, 3000);
    };
    changePage();
  } catch (error) {
    formAlert.style.display = 'block';
    formAlert.innerHTML = `Error!, Please Try Again Later`;
  }
});




