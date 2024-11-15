import { create } from "zustand"

interface Task {
    id: number
    title: string
    completed: boolean
}

interface listFeatures {
    tasks: Task[]
    addTask: (title : string) => void
    removeTask: (id: number) => void
    editTask: (id: number, newTitle: string) => void
}

export const useToDoList = create<listFeatures>( (set) => ({
    tasks: [],
    addTask: (title) => ( set( (state) => ({ tasks: [...state.tasks, {id: Date.now(), title, completed: false}]}) ) ),
    removeTask: (id) => ( set( (state) => ({tasks: state.tasks.filter( (task) => task.id !== id)}))),
    editTask: (id, newTitle) => ( set( (state) => ({tasks: state.tasks.map( (task) => task.id === id ? {...task, title: newTitle} : task)})))
}))