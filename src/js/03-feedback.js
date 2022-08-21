
// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state'

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea'),
//     emailElement: document.querySelector('.feedback-form input'),
// };
// populateTextarea();

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.textarea.addEventListener('textarea', throttle(onTextareaInput, 500));


// function onTextareaInput(evt) {
//         evt.preventDefault();

//     let formData = localStorage.getItem(STORAGE_KEY)
//         ? JSON.parse(localStorage.getItem(STORAGE_KEY))
//         : {};
//     formData[evt.target.name] = evt.target.name.value;

//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }
// function onFormSubmit(evt) {
//     evt.preventDefault();
//     const email = evt.target.elements.email.value;
//     const message = evt.target.elements.message.value;
    
//     if (email === '' || message === '') {
//         alert('Заповни всі поля!')
//     } else {
//     localStorage.removeItem(STORAGE_KEY);   
//         console.log({ email, message });
// }
//     evt.currentTarget.reset()
// }


// function populateTextarea() {
//     let formData = localStorage.getItem(STORAGE_KEY);
//     if (formData) {
//         formData = JSON.parse(formData);
//         Object.entries(formData).forEach(([name, value]) => {
//             refs.form.elements[name].value = value;
//         })
      
//     }
// }
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    emailElement: document.querySelector('.feedback-form input'),
};
populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.textarea.addEventListener('textarea', throttle(onTextareaInput, 500));


function onTextareaInput(evt) {
        evt.preventDefault();

    let formData = localStorage.getItem(STORAGE_KEY)
        ? JSON.parse(localStorage.getItem(STORAGE_KEY))
        : {};
    formData[evt.target.name] = evt.target.name.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function populateTextarea() {
    let formData = localStorage.getItem(STORAGE_KEY);
    if (formData) {
        formData = JSON.parse(formData);
        Object.entries(formData).forEach(([name, value]) => {
            refs.form.elements[name].value = value;
        })
      
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



      
    
}