import { TISODate } from './ISODate'
import { TStatus } from './status'

export interface ITask {
  id: string
  title: string
  description: string
  date: TISODate
  status: TStatus
}
