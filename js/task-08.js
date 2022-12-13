 const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

 function onFormSubmit (event){
     event.preventDefault();
     const formData = new FormData(event.currentTarget);

     const { elements: { email, password }, } = event.currentTarget;
  
     if(email.value === '' || password.value === ''){
        return alert('Всі поля мають бути заповнені');
     }
     
     const userInfo = { email: email.value, password: password.value}
     console.log(userInfo);

     event.currentTarget.reset();
}
