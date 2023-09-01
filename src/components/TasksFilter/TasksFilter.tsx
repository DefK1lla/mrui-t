import { Stack, TextField } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import type { FC } from 'react'

import type { ITaskFilterParams } from 'types/filter'

interface ITasksFilterProps {
  onChange: (value: ITaskFilterParams) => void
}

export const TasksFilter: FC<ITasksFilterProps> = ({ onChange }) => {
  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ITaskFilterParams>({
    defaultValues: {},
  })

  useEffect(() => {
    const subscription = watch(value => {
      const from = value.date?.from
      const to = value.date?.to

      if (!from || !to) return onChange(value)

      if (Date.parse(from) <= Date.parse(to)) {
        clearErrors()
        return onChange(value)
      }

      setError('date', {})
    })

    return () => subscription.unsubscribe()
  }, [clearErrors, onChange, setError, watch])

  return (
    <Stack
      minWidth='100%'
      flexDirection='row'
      flexWrap='wrap'
      justifyContent='space-between'
    >
      <TextField {...register('keyword')} name='keyword' label='Keyword' />
      <TextField
        {...register('date.from')}
        label='from'
        type='datetime-local'
        error={!!errors.date}
      />
      <TextField
        {...register('date.to')}
        label='to'
        type='datetime-local'
        error={!!errors.date}
      />
    </Stack>
  )
}
