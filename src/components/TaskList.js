import React, { useContext } from 'react'

import Task from './Task'

import { TaskListContext } from '../context/TaskListContext'

const TaskList = () => {
  const { tasks } = useContext(TaskListContext)

  return (
    <div>
      <ul className="list">
        {tasks.map((task) => {
          return <Task />
        })}
      </ul>
    </div>
  )
}

export default TaskList
