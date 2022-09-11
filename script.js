const submitBtn = document.getElementById('submitBtn');
const emailInput = document.querySelector('.email-input');
const form = document.querySelector('form');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();   
    if(emailInput.value == '') { 
        form.setAttribute('id', 'empty-email');  
    }else if(emailInput.value !== '' && emailInput.validity.valid != true) {
        form.setAttribute('id', 'invalid-email') 
    }else {
        form.removeAttribute('id') 
    }
})