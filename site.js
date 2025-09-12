
const h1 = document.querySelector('h1')
setTimeout(() => {
h1.textContent = 'Welcome to my page ;)'
},5000)

const welcome = document.querySelector('#welcome h3')
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

if (isMorning)
    welcome.textContent ="Good Morning"
else if (isAfternoon) {
    welcome.textContent ="Good Afternoon"
    
} else {
    welcome.textContent ="Good Evening"
}