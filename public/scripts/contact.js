const myContactForm = document.querySelector('.contactForm');
const fullNameInput = document.querySelector('.fullNameInput');
const studentNumberInput = document.querySelector('.studentNoInput');
const emailInput = document.querySelector('.emailInput');
const messageInput = document.querySelector('.contactMessage');
const formAlert = document.querySelector('.form-alert');
const formButton = document.querySelector('#myButton');

myContactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const fullName = fullNameInput.value;
  const myArray = fullName.split(' ');

  fullNameInput.value = '';
  studentNumberInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  formAlert.style.display = 'block';
  formAlert.innerHTML = `Sayın ${myArray[0]}, mesajınız bize başarıyla ulaştı...`
  formAlert.classList.add('text-success');
  const changePage = () => {
      setTimeout(() => {
          formAlert.style.display = 'none';
          formAlert.classList.remove('text-success');
          window.location.href = '../index.html';
      }, 3000)
  }
  changePage();
});
