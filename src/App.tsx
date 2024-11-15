import { useToDoList } from "./store/to-do-list-store"

import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { FcCancel } from "react-icons/fc"
import { IoIosSave } from "react-icons/io"

import { useTaskManager } from "./hooks/useTaskManager"

function App() {

  const { tasks, removeTask } = useToDoList()

  const { taskTitle, setTaskTitle, isEditing, setIsEditing, newTitle, setNewTitle, handleAddTask,handleEdit, startEditing } = useTaskManager()

  return (
    <div className="min-h-screen flex flex-col items-center bg-colorPrimary text-textColor p-8 gap-20">

      <h1 className="text-4xl font-bold">Lista de Tarefas</h1>
      
      <div className="flex justify-between gap-4 min-w-[50%]">
        <input type="text" placeholder="Digite aqui a sua tarefa" className="w-full p-2 text-colorSecondary border-none rounded-md" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}/>
        <button className="bg-LimeGreen p-2 rounded-md" onClick={handleAddTask}>+</button>
      </div>

      <ul className="flex flex-col gap-4 min-w-[50%]">
        <h2 className="text-xl font-bold">Tarefas:</h2>
        {tasks.map((task) => (
          <li key={task.id} className="bg-colorSecondary flex gap-4 justify-between p-2 rounded-md">
            {isEditing === task.id ? (
              <>
                <div>
                  <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="p-1 text-colorSecondary border-none rounded-md"/>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => handleEdit(task.id)} className="text-LimeGreen"><IoIosSave /></button>
                  <button onClick={() => setIsEditing(null)}><FcCancel /></button>
                </div>
              </>
            ) : (
              <>
                <div>
                  {task.title}
                </div>

                <div className="flex gap-4">
                  <button onClick={() => startEditing(task.id, task.title)} className="text-fuchsia-600"><FaEdit /></button>
                  <button onClick={() => removeTask(task.id)} className="text-red-600"><MdDelete /></button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App