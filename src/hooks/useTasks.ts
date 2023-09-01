import { useEffect, useState } from 'react'

import TasksService from 'services/tasks'
import { TStatus } from 'types/status'
import { ITask } from 'types/task'
import type { ITaskFilterParams } from 'types/filter'

export const useTasks = () => {
  const [items, setItems] = useState<ITask[]>([])
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<ITaskFilterParams>({})

  useEffect(() => {
    setItems(TasksService.getAll(filter))
  }, [filter])

  const create = (task: ITask) => {
    try {
      TasksService.create(task)
      setItems(TasksService.getAll())
    } catch (e) {
      const err = e as Error
      console.log(err)
      setError(err.message)
    }
  }

  const changeStatus = (taskId: string, status: TStatus) => {
    try {
      TasksService.changeStatus(taskId, status)
      setItems(TasksService.getAll())
    } catch (e) {
      const err = e as Error
      console.log(err)
      setError(err.message)
    }
  }

  const edit = (task: ITask) => {
    try {
      TasksService.edit(task)
      setItems(TasksService.getAll())
    } catch (e) {
      const err = e as Error
      console.log(err)
      setError(err.message)
    }
  }

  const remove = (taskId: string) => {
    TasksService.remove(taskId)
    setItems(TasksService.getAll())
  }

  return {
    items,
    remove,
    changeStatus,
    edit,
    setFilter,
    create,
    error,
  }
}
