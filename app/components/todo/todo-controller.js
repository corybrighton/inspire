import TodoService from "./todo-service.js";

var ts = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	ts.getTodos(draw)
}

function draw(todos) {

	let template = ''
	let count = 0
	todos.data.forEach(todo => {
		template += `
		<input type="checkbox" name="${todo.description}" onchange="app.controllers.todoCtrl.toggleTodoStatus('${todo._id}')"`
		template += (todo.completed) ? `checked><strike>${todo.description}</strike>` : `>${todo.description}`
		template += `<i class="fas fa-eraser" onclick="app.controllers.todoCtrl.removeTodo('${todo._id}')"></i><br>
		`
		if (!todo.completed) { count++ }
	});
	let top = `
	<div class="pl-4">
				Todo List - ${count}
				<form onsubmit="app.controllers.todoCtrl.addTodoFromForm(event)">`
	template += `
					<input type="text" name="newTodo">
				</form>
			</div>`
	document.getElementById('todo').innerHTML = top + template
}


export default class TodoController {

	addTodo() {
		ts.getTodos(draw)
	}

	addTodoFromForm(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.newTodo.value
		}
		ts.addTodo(todo, getTodos)
	}

	toggleTodoStatus(todoId) {
		ts.toggleTodoStatus(todoId, getTodos)
	}

	removeTodo(todoId) {
		ts.removeTodo(todoId, draw)
	}
}
