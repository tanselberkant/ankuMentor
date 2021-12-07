const myMentorDiv = document.querySelector('.myMentors');
const loginButton = document.querySelector('#loginButton');
const dashButton = document.querySelector('#dashboardButton');
const loginNav = document.querySelector('#loginNav');
const logOutNav = document.querySelector('#logOutNav');
const dashNav = document.querySelector('#dashNav');

const showMentors = async () => {
  try {
    const {
      data: { mentors, userIN },
    } = await axios.get('/api/mentors');
    if (mentors.length < 1) {
      myMentorDiv.innerHTML = '<h5> No Mentors in your list </h5>';
      return;
    }

    const allMentors = mentors
      .map((mentor) => {
        const { fullname, faculty } = mentor;
        return `<p> <i class="fas fa-angle-right"></i> ${fullname} | ${faculty} </p>
        `;
      })
      .join('');
    myMentorDiv.innerHTML = allMentors;

    if (userIN) {
      loginButton.style.display = 'none';
      dashButton.classList.remove('customButton');
      loginNav.style.display = 'none';
      dashNav.classList.remove('customButton');
      logOutNav.classList.remove('customButton');
      console.log(userIN);
    }
  } catch (error) {
    myMentorDiv.innerHTML = `<h5> There was an error, please try later.... </h5>`;
  }
};

showMentors();
