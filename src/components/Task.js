import React from 'react'

const Task = () => {
  return (
    <li className="list-item">
      <span>Task title</span>
      <div>
        <button className="btn-delete">
          <i className="fas fa-trash-all"></i>
        </button>
        <button className="btn-edit">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  )
}

export default Task
