
import { useState } from "react"

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [newTask, setNewTask] = useState("")
  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState("")

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
      }
      setTodos([...todos, newTodo])
      setNewTask("")
    }
  }

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const startEditing = (id, text) => {
    setEditingId(id)
    setEditingText(text)
  }

  const saveEdit = () => {
    if (editingText.trim() !== "") {
      setTodos(todos.map((todo) => (todo.id === editingId ? { ...todo, text: editingText.trim() } : todo)))
    }
    setEditingId(null)
    setEditingText("")
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditingText("")
  }

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask()
    }
  }

  const handleEditKeyPress = (e) => {
    if (e.key === "Enter") {
      saveEdit()
    } else if (e.key === "Escape") {
      cancelEdit()
    }
  }

  return (
    <div className="data-panel to-do w-full max-w-md mx-auto max-h-[55vh] bg-[#171717] rounded-3xl shadow-lg overflow-y-scroll">
      <div className="p-6">
        <h2 className="text-center text-white text-2xl font-bold mb-6">Todo List</h2>

        {/* Add new task */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-3 py-2 bg-[#242424] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button
            onClick={addTask}
            disabled={!newTask.trim()}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            Add
          </button>
        </div>

        {/* Todo list */}
        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-center text-gray-400 py-8">No tasks yet. Add one above!</p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center gap-3 p-3 border rounded-lg ${
                  todo.completed ? "bg-gray-800 opacity-75 border-gray-600" : "bg-gray-800 border-gray-600"
                }`}
              >
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="w-4 h-4 accent-green-500"
                />

                {/* Task text or edit input */}
                <div className="flex-1">
                  {editingId === todo.id ? (
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyPress={handleEditKeyPress}
                      className="w-full px-2 py-1 text-sm bg-gray-700 border border-gray-500 rounded text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                      autoFocus
                    />
                  ) : (
                    <span className={`${todo.completed ? "line-through text-gray-500" : "text-white"}`}>
                      {todo.text}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-1">
                  {editingId === todo.id ? (
                    <>
                      <button
                        onClick={saveEdit}
                        className="h-8 w-8 flex items-center justify-center hover:bg-gray-700 rounded"
                      >
                        <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="h-8 w-8 flex items-center justify-center hover:bg-gray-700 rounded"
                      >
                        <svg className="h-4 w-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEditing(todo.id, todo.text)}
                        className="h-8 w-8 flex items-center justify-center hover:bg-gray-700 rounded"
                      >
                        <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteTask(todo.id)}
                        className="h-8 w-8 flex items-center justify-center hover:bg-gray-700 rounded"
                      >
                        <svg className="h-4 w-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Task counter */}
        {todos.length > 0 && (
          <div className="text-center text-sm text-gray-400 pt-4 mt-4 border-t border-gray-600">
            {todos.filter((todo) => !todo.completed).length} of {todos.length} tasks remaining
          </div>
        )}
      </div>
    </div>
  )
}
