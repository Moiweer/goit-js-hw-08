
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'


const form = document.querySelector('.feedback-form');

let formObject = {};


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onTextareaInput(evt) {
    evt.preventDefault();
    
    formObject[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formObject));

}

function onFormSubmit(evt) {
    evt.preventDefault();
    const email = evt.target.elements.email.value;
    const message = evt.target.elements.message.value;
    
    if (email === '' || message === '') {
        alert('Заповни всі поля!')
    } else {
    localStorage.removeItem(STORAGE_KEY);   
        console.log({ email, message });
}
    evt.currentTarget.reset()
}


function populateTextarea() {
    let formData = localStorage.getItem(STORAGE_KEY);
    if (formData) {
        formData = JSON.parse(formData);
        Object.entries(formData).forEach(([name, value]) => {
            form.elements[name].value = value;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
        })
      
    }
}