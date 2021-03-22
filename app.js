const button1 = document.querySelector(`#one`);
button1.onclick = () => {
    alert(`Cool! You can hear/understand a hummingbird and ants`)
};

const h3 = document.querySelector(`h3`);
h3.addEventListener('mouseenter', () => {
    h3.classList.toggle(`dark-mode`);
    alert(`OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one`);
});

const form =  document.querySelector(`form`);
form.addEventListener(`submit`, q => {
    q.preventDefault();
    const mess = form.elements.quote.value;
    alert(`${mess}`);
})

const darkMode = document.querySelector(`#dm`);
darkMode.addEventListener(`click`, () => {
    for (element of document.querySelectorAll('*')){
        elements.classlist.toggle('dark-mode');
    }
});

const reality = document.querySelector(`#reality`);
let i = 1;
function realityJump(){
    if (i < 3){
        alert(`You have successfully moved to another reality`);
        i++;
    } else {
        alert(`OH NO! You can only move to a new other reality a couple times. You are stuck in this reality!`);
        reality.removeEventListener(`click`, realityJump);
    }
}
reality.addEventListener(`click`, realityJump);