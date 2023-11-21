import {useState} from "react";
import TodoItem from "./components/TodoItem";
import "../src/style/style.css"

function App() {
  const [todos, setTodos] = useState(todosArray)
  const [newTodoTitle, setNewTodoTitle] = useState("")

    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleEditTodo = (data) => {
    setTodos(todos.map(el => el.id === data.id ? data : el))
    }

  const handleChange = (id, completed) => {
    setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, completed: completed } : todo
        )
    )
  }

  const handleAddTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      completed: false,
    }

    setTodos([...todos, newTodo]);
    setNewTodoTitle(""); // Очищаем поле ввода после добавления
  }

  return (
    <div>
      <div className={'container'}>
        <h1>Todo App</h1>
        <div className={'addTodo'}>
          <input className={'addInput'}
              type="text"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
                 placeholder={"add a task"}
          />
          <button className={'addBtn'} onClick={handleAddTodo}>Add</button>
        </div>
        {
          todos.map((todo) =>
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              handleEditTodo={handleEditTodo}
              handleChange={handleChange}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;

const todosArray = [
  {
    id: 1,
    title: 'Todo 1',
    completed: true
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: false
  }
]
console.log(todosArray)