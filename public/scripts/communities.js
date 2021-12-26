const myComDiv = document.querySelector('.myCommunities');
const loginButton = document.querySelector('#loginButton');
const dashButton = document.querySelector('#dashboardButton');
const loginNav = document.querySelector('#loginNav');
const logOutNav = document.querySelector('#logOutNav');
const dashNav = document.querySelector('#dashNav');

const showCommunities = async () => {
  try {
    const {
      data: { communities, userIN },
    } = await axios.get('/api/users/communities');
    if (communities.length < 1) {
      myComDiv.innerHTML = '<h5> There are No Communities in your list </h5>';
      return;
    }

    const allComm = communities
      .map((community) => {
        const { communityName } = community;
        return `<p> <i class="fas fa-angle-right"></i> ${communityName}  </p>`;
      })
      .join('');
    myComDiv.innerHTML = allComm;

    if (userIN) {
      loginButton.style.display = 'none';
      dashButton.classList.remove('customButton');
      loginNav.style.display = 'none';
      dashNav.classList.remove('customButton');
      logOutNav.classList.remove('customButton');
      console.log(userIN);
    }
  } catch (error) {
    myComDiv.innerHTML = `<h5> There was an error, please try later.... </h5>`;
  }
};
