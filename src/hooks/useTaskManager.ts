import { useState } from "react";
import { useToDoList } from "../store/to-do-list-store";

export const useTaskManager = () => {
  const { addTask } = useToDoList();

  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim() !== "") {
      addTask(taskTitle)
      setTaskTitle("")
    }
  }

  

  

  return {taskTitle, setTaskTitle, handleAddTask}
}