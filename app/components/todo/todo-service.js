import Todo from "../../models/todos.js";


// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/coryB/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []
let todoCount = todoList.length + 1
function gettodoCount() {
	let count = 0
	todoList.forEach(todo => {
		if (todo.completed) { count++ }
	});
	return todoCount - count
}

export default class TodoService {

	getTodos(draw) {
		todoApi.get('')
			.then((res) => {
				todoList = res.data.data.map(todo => new Todo(todo))
				draw(res.data)
			})
			.catch(logError)
	}

	addTodo(todo, draw) {
		todoApi.post('', todo)
			.then(function (res) {
				draw()
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, draw) {
		var todo = todoList.find(todo => todo._id == todoId)
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				draw()
			})
			.catch(logError)
	}

	removeTodo(todoId, draw) {
		todoApi.delete(todoId)
			.then(res => {
				this.getTodos(draw)
			})
			.catch(logError)
	}

}
