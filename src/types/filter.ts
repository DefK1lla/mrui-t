import { TISODate } from 'types/ISODate'

export interface ITaskFilterParams {
  keyword?: string
  date?: {
    from?: TISODate
    to?: TISODate
  }
}
