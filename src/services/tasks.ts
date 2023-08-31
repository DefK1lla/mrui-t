import { v4 as uuidv4 } from 'uuid'

import { ITask } from 'types/task'
import { TStatus } from 'types/status'

class TasksService {
  static getAll = () => {
    const tasksRaw = localStorage.getItem('tasks')
    return tasksRaw ? JSON.parse(tasksRaw) : []
  }

  static create = (task: ITask) => {
    const tasksRaw = localStorage.getItem('tasks')
    const tasks = tasksRaw ? JSON.parse(tasksRaw) : []
    task.id = uuidv4()
    task.status = 'todo'
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return task
  }

  static edit = (task: ITask) => {
    if (!task.id) {
      throw new Error('Task not exists')
    }

    const tasksRaw = localStorage.getItem('tasks')
    const tasks: ITask[] = tasksRaw ? JSON.parse(tasksRaw) : []
    const taskIndex = tasks.findIndex(t => t.id === task.id)

    tasks[taskIndex] = task
    localStorage.setItem('tasks', JSON.stringify(tasks))

    return task
  }

  static remove = (taskId: string) => {
    const tasksRaw = localStorage.getItem('tasks')
    const tasks: ITask[] = tasksRaw ? JSON.parse(tasksRaw) : []
    const index = tasks.findIndex(t => t.id === taskId)

    if (index === -1) {
      throw new Error('Task not exists')
    }

    const task = tasks[index]
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    return task
  }

  static changeStatus = (taskId: string, status: TStatus) => {
    const tasksRaw = localStorage.getItem('tasks')
    const tasks: ITask[] = tasksRaw ? JSON.parse(tasksRaw) : []
    const task = tasks.find(t => t.id === taskId)

    if (!task) {
      throw new Error('Task not exists')
    }

    task.status = status
    localStorage.setItem('tasks', JSON.stringify(tasks))

    return task
  }
}

export default TasksService
