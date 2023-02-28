const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const ValidarInput = ({ target }) => {
    //console.log(event.target.value); //descubro o elemento que disparou o evento

    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }

}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = './Memoria2.html'
}

input.addEventListener('input', ValidarInput);
form.addEventListener('submit', handleSubmit);
