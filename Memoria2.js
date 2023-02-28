const Nickname = localStorage.getItem('player');
const Nick = document.getElementById('Jogador');

Nick.innerHTML = Nickname;


const grid = document.querySelector('.grid');

const imagens = [
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
    'card6',
    'card7',
    'card8',
    'card9',
    'card10',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);

    element.className = className;

    return element;
}

let FirstCard = '';
let SecondCard = '';

const CheckEndGame = () => {
    const disableCards = document.querySelectorAll('.disable-card');

    if (disableCards.length === 20) {
        alert('Quem diria que você realmente iria conseguir...')

        clearInterval(Timer)
    }

}

const CheckCards = () => {
    const Firstimage = FirstCard.getAttribute('data-character');
    const Secondimage = SecondCard.getAttribute('data-character');

    if (Firstimage === Secondimage) {
        FirstCard.firstChild.classList.add('disable-card');
        SecondCard.firstChild.classList.add('disable-card');

        FirstCard = '';
        SecondCard = '';

        CheckEndGame();
    } else {
        setTimeout(() => {
            FirstCard.classList.remove('reveal-card');
            SecondCard.classList.remove('reveal-card');

            FirstCard = '';
            SecondCard = '';

        }, 500);
    }
}

const revealcard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (FirstCard === '') {
        target.parentNode.classList.add('reveal-card');

        FirstCard = target.parentNode;
    } else if (SecondCard === '') {
        target.parentNode.classList.add('reveal-card');

        SecondCard = target.parentNode;

        CheckCards();
    }



}

const CreateCard = (image) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('./Images/${image}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealcard);

    card.setAttribute('data-character', image)

    return card;
}

const LoadGame = () => {
    const DuplicaCartas = [
        ...imagens, ...imagens
    ]

    const shuffledArray = DuplicaCartas.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((image) => {
        const card = CreateCard(image);

        grid.appendChild(card);
    });

    let segundos = 0;
    let minutos = 0;

    function segundo() {

        segundos++;
        if (segundos == 60) {

            minutos++;

            segundos = 0;

            document.getElementById('minuto').innerHTML = minutos
        }
        document.getElementById('segundo').innerHTML = segundos

    }

    Timer = setInterval(function () { segundo() }, 1000)

}

LoadGame();