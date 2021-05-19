const correctAnswer = ['A', 'B', 'A'];
const divScore = document.querySelector('.score');
const form = document.querySelector('form');

form.addEventListener('submit', e => {

e.preventDefault();

const userAnswer = [form.q1.value, form.q2.value, form.q3.value];
let score = 0;
userAnswer.forEach((UA, index) => {
    if(UA === correctAnswer[index]){
        score += 33;
    } else {
        score += 0;
    }
    
 })
 scrollTo(0,0);
divScore.classList.remove('d-none');

let i = 0;
const timer = setInterval(() => {

    divScore.querySelector('h3').innerText = `You scored: ${i}%`;

    if (i === score){
        clearInterval(timer);
    }
    i++;
}, 15)
divScore.querySelector('h3').innerText = `You scored: ${score}%`;

 console.log(score);
});