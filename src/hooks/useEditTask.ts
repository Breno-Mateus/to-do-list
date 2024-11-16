import { useState } from "react"
import { useToDoList } from "../store/to-do-list-store"

const useEditTask = () => {

    const { editTask } = useToDoList()

    const [isEditing, setIsEditing] = useState<number | null>(null)
    const [newTitle, setNewTitle] = useState("")

    const handleEdit = (id: number) => {
        
        if (newTitle.trim() !== "") {
            
            editTask(id, newTitle)
            setIsEditing(null)
            setNewTitle("")

        }
    }

    const startEditing = (id: number, currentTitle: string) => {
        setIsEditing(id)
        setNewTitle(currentTitle)
    }

    return {
        editingState: { isEditing, setIsEditing, newTitle, setNewTitle },
        actions: { handleEdit, startEditing },
    }
}

export default useEditTask