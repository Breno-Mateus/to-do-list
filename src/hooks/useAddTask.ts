import { useState } from "react"
import { useToDoList } from "../store/to-do-list-store"

const useAddTask = () => {

    const { addTask } = useToDoList()

    const [taskTitle, setTaskTitle] = useState("")

    const handleAddTask = () => {

        if (taskTitle.trim() !== "") {
          addTask(taskTitle)
          setTaskTitle("")
        }

    }

    return {
        editingState: { taskTitle, setTaskTitle },
        actions: { handleAddTask },
    }
}

export default useAddTask