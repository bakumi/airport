function login() {
  const login = document.getElementById('loginInput').value;
  const password = document.getElementById('passwordInput').value;

  if (login === 'admin' && password === 'admin') {
      
      window.location.href = 'adminpanel.html';
  } else {
      
  }
}
