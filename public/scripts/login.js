const myLoginForm = document.querySelector('.loginForm');
const studentNumberInput = document.querySelector('.studentNumberInput');
const passwordInput = document.querySelector('.passwordInput');
const loginButton = document.querySelector('#myButton');
const formAlert = document.querySelector('.form-alert');

myLoginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const studentNumber = studentNumberInput.value;
  const password = passwordInput.value;
  let control = false;

  try {
    await axios
      .post('/api/users/signin', {
        studentNumber,
        password,
      })
    studentNumberInput.value = '';
    passwordInput.value = '';
    formAlert.style.display = 'block';
    formAlert.innerHTML = `Giriş Başarılı Yönlendiriliyorsunuz`;
    formAlert.classList.add('text-success');
    const changePage = () => {
      setTimeout(() => {
        formAlert.style.display = 'none';
        formAlert.classList.remove('text-success');
        window.location.href = '../index.html';
      }, 3000);
    };
    changePage();
  } catch (error) {
    formAlert.style.display = 'block';
    formAlert.innerHTML = `Bir seyler ters gitti sonra tekrar dene`;
  }
});
