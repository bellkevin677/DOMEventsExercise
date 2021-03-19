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
darkMode.addEventListener(`submit`, () => {
    const all = document.querySelector(`*`);
    all.classList.toggle(`dark-mode`);
});