// app.js

function login() {
  // Получаем значения логина и пароля
  const login = document.getElementById('loginInput').value;
  const password = document.getElementById('passwordInput').value;

  // Проверяем, соответствуют ли введенные значения логину и паролю
  if (login === 'admin' && password === 'admin') {
      // Если соответствуют, перенаправляем на index.html
      window.location.href = 'adminpanel.html';
  } else {
      // Если не соответствуют, ничего не делаем
  }
}
