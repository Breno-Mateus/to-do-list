import { useState } from "react";
import { useToDoList } from "../store/to-do-list-store";

export const useTaskManager = () => {
  const { addTask, editTask } = useToDoList();

  const [taskTitle, setTaskTitle] = useState("");
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [newTitle, setNewTitle] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim() !== "") {
      addTask(taskTitle)
      setTaskTitle("")
    }
  }

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

  return {taskTitle, setTaskTitle, isEditing, setIsEditing, newTitle, setNewTitle, handleAddTask, handleEdit, startEditing}
}