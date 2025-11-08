
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


localStorage.setItem('It\'s a secret to everybody', 'Whats up doc?')

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()
const btnNext = document.querySelector('#next')
btnNext.addEventListener('click',() =>
{
    currentImage ++
    showImages()
})

const btnPrev = document.querySelector('#prev')
btnPrev.addEventListener('click',() =>
{
    currentImage --
    showImages()
})

setInterval(() => {
    currentImage ++
    showImages()
}, 5000)

// Todo List
const input = document.querySelector('#new-todo')
const addButton = document.querySelector('#addButton')
const todoList = document.querySelector('.todo-list')
// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []


// Arrow function to render todos
const renderTodos = () => {
  // Clear existing list items
  todoList.innerHTML = ''

  // Loop through todos and create list items
  todos.forEach(todo => {
    const li = document.createElement('li')
    li.textContent = todo.text
    todoList.append(li)
  });
};


// Event listener for adding new todo
addButton.addEventListener('click', () => {
  const text = input.value.trim()
  if (text !== '') {
    // Add new todo to array
    todos.push({ text: text, completed: false })

    // Save updated todos 
     localStorage.setItem('todo-list', JSON.stringify(todos))

// Clear input field
    input.value = ''


    // Re-render the list
    renderTodos()
  }


});


// Initial render on page load
renderTodos();

/* // Add a new item to the list
todos.push({ text: input.value, completed: false })

// Save the list to local storage
localStorage.setItem('todo-list', JSON.stringify(todos))

// Clear the li's before we recreate them
todoList.innerHTML = ''

// Create and add new list items to the DOM
const li = document.createElement('li')
li.textContent = todo.text
todoList.append(li)
 */

// Pokemon Section
const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    try{
    const response = await fetch(url)
    const data = await response.json()
    return data
    } catch (error) {
        console.error('Error fetching Pokemon:', error)
    }
}
// Render Pokemon
const renderPokemon = (pokemon) => {
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = ''

    const img = document.createElement('img')
    img.src = pokemon.sprites.front_default
    img.alt = pokemon.name
    pokemonDiv.append(img)
    const name = document.createElement('h2')
    name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    pokemonDiv.append(name)

    return pokemon

}

(async () => {
  const pokemon = await getRandomPokemon();
    renderPokemon(pokemon);
})();