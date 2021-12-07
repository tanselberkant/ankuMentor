const studentNameDOM = document.querySelector('#studentName');
const studentNumberDOM = document.querySelector('#studentNumber');
const mentorNameDOM = document.querySelector('#mentorName');
const mentorEmailDOM = document.querySelector('#mentorEmail');
const mentorPhoneDOM = document.querySelector('#mentorPhone');
const mentorFacultyDOM = document.querySelector('#mentorFaculty');
const studentImgDOM = document.querySelector('.dashImg');

const logOutNav = document.querySelector('#logOutNav');
const loginNav = document.querySelector('#loginNav');
const dashNav = document.querySelector('#dashNav');

const getDashboard = async () => {
  try {
    const {
      data: { student, userIN, studentAvatar },
    } = await axios.get('/api/users/dashboard');
    const { firstName, lastName, email, studentNumber, mentor } = student;
    studentNameDOM.innerHTML =
      studentNameDOM.innerHTML + firstName + ' ' + lastName;
    studentNumberDOM.innerHTML = studentNumberDOM.innerHTML + studentNumber;
    mentorNameDOM.innerHTML = mentorNameDOM.innerHTML + mentor.fullname;
    mentorEmailDOM.innerHTML = mentorEmailDOM.innerHTML + mentor.email;
    mentorPhoneDOM.innerHTML = mentorPhoneDOM.innerHTML + mentor.phoneNumber;
    mentorFacultyDOM.innerHTML = mentorFacultyDOM.innerHTML + mentor.faculty;
    studentImgDOM.src = studentAvatar;
    
    if(userIN) {
      loginNav.classList.add('customButton')
    }

  } catch (error) {
    studentNameDOM.innerHTML = 'No such student';
    dashNav.style.display = 'none';
    logOutNav.classList.add('customButton');
  }
};

getDashboard();
