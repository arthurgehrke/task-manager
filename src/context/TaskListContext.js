import React, { createContext, useState } from 'react'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => { 
  const [tasks, setTasks] = useState([
    {task: "Study React", id: 1},
    {task: "Study NodeJs", id: 2},
    {task: "Study Deno", id: 3},
  ])

  return (
    <TaskListContext.Provider value={{tasks}}>
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider
