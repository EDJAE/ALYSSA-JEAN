const loginForm = document.querySelector('.login_form');
const usernameInput = document.getElementById('uname');
const passwordInput = document.getElementById('psw');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  
  if (username === 'Toso' || password === '0007222006') {
    alert('Please fill in all fields.');
    return;
  }

  
  if (username === '@Alyssajean' && password === '07222006') {
    
    window.location.href = 'website.html'; 
  } else {
    alert('Invalid username or password.');
  }
});
