//Регистрация

let loginInput = document.querySelector('#login');
let passwordInput = document.querySelector('#password');
let clickButton = document.querySelector('#click');
let result = document.querySelector('#result')
let passwordCheck = document.querySelector('#passwordCheck')
let showPassword = document.querySelector('#showPassword');
let showPasswordCheck = document.querySelector('#showPasswordCheck')

let users = [];
let regExpCheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
let regExpCheckPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


loginInput.addEventListener('input', () => {
    result.innerHTML = ''
    
    if (loginInput.value.trim() === '') {
      result.innerHTML = 'Please enter your login';
      result.style.color = 'red';
      return;
    }
    if (regExpCheck.test(loginInput.value)) {
        result.innerHTML = 'Login success, now enter the password';
        result.style.color = 'green';
        loginInput.style.border = '1.5px solid green'
    } else {
        result.innerHTML = 'Please enter your login correctly';
        result.style.color = 'red';
        loginInput.style.border = '1.5px solid red'
        return;
    }

  });

  
  //Проверка на совпадение паролей
  passwordInput.addEventListener('input', () => {
    if(passwordInput.value === passwordCheck.value) {
        result.innerHTML = 'Passwords match'
        result.style.color = 'green'
        return
    }else{
        result.innerHTML = "Password mismatch"
        result.style.color = 'red'
    }
  });

  passwordCheck.addEventListener('input', () => {
    if(passwordCheck.value === passwordInput.value) {
        result.innerHTML = 'Passwords match'
        result.style.color = 'green'
        return
    }else{
        result.innerHTML = "Password mismatch"
        result.style.color = 'red'
    }
  });

  //Кнопки чтобы видеть скрытый пароль

  showPassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
     
    } else {
      passwordInput.type = 'password';
      
    }
  });

  showPasswordCheck.addEventListener('click', () => {
    if (passwordCheck.type === 'password') {
      passwordCheck.type = 'text';
     
    } else {
      passwordCheck.type = 'password';
      
    }
  });

  clickButton.addEventListener('click', () => {
    result.innerHTML = ''
    
    if (loginInput.value.trim() === '' || passwordInput.value.trim() === '') {
      result.innerHTML = 'Please enter your login or password.';
      result.style.color = 'red';
      return;
    }

    if(passwordCheck.value !== passwordInput.value || passwordInput.value !== passwordCheck.value) {
        result.innerHTML = 'Please check your passwords'
        result.style.color = 'red'
        return
    }

    if (regExpCheck.test(loginInput.value)) {
    
    } else {
        result.innerHTML = 'Please enter your login correctly';
        result.style.color = 'red';
        return;
    }
    if (regExpCheckPassword.test(passwordInput.value)) {
  
  } else {
      result.innerHTML = 'Password must contain at least 8 characters - lowercase letters, uppercase letters, and numbers';
      result.style.color = 'red';
      return;
  }

    const user = {};
    user.login = loginInput.value; 
    user.password = passwordInput.value; 
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users); 

    loginInput.value = '';
    passwordInput.value = '';
    passwordCheck.value = '';
  });
  

 
const savedData = localStorage.getItem('users');
if (savedData) {
  users = JSON.parse(savedData);
}