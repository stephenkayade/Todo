const addForm = document.querySelector('.add')
const todos = document.querySelector('.todos')
const search = document.querySelector('.search input')

const filteredTodo = (keyword) => {
    Array.from(todos.children)
        .filter(todo => !todo.textContent.includes(keyword))
        .forEach(todo => todo.classList.add('filter'))
    Array.from(todos.children)
        .filter(todo => todo.textContent.includes(keyword))
        .forEach(todo => todo.classList.remove('filter'))
}

// Filtering through todo
search.addEventListener('keyup', e => {
    const keyword = search.value.trim().toLowerCase();
    filteredTodo(keyword)
})

// Deleting a todo
todos.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})

// Add a custom template
const generateTodo = (todo) => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center mb-3">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete text-danger"></i>
    </li>`
    todos.innerHTML += html
}

// Adding a todo
addForm.addEventListener('submit', e => {
    e.preventDefault()
    const todo = addForm.add.value.toLowerCase().trim()
    if (todo.length > 0) {
        generateTodo(todo)
    }
    // clearing form after adding a todo
    addForm.reset()
})