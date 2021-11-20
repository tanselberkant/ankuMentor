const myMentorDiv = document.querySelector('.myMentors');

const showMentors = async () => {
  try {
    const {
      data: { mentors },
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
  } catch (error) {
    myMentorDiv.innerHTML = `<h5> There was an error, please try later.... </h5>`;
  }
};

showMentors();
