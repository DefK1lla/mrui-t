import { TextField, Stack, Button, Typography } from '@mui/material'
import type { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { ITask } from 'types/task'

interface ITaskFormProps {
  onSubmit: (data: ITask) => void
  initialValue?: ITask
}

export const TaskForm: FC<ITaskFormProps> = ({ initialValue, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    values: initialValue,
    defaultValues: initialValue,
  })

  return (
    <form>
      <Stack spacing={2}>
        <Typography variant='h4'>Fill the form</Typography>
        <Controller
          control={control}
          name='title'
          defaultValue=''
          render={({ field: { value, onChange } }) => (
            <TextField
              label='Title'
              fullWidth
              size='small'
              value={value}
              onChange={e => onChange(e.target.value)}
            />
          )}
        />

        <Controller
          control={control}
          name='description'
          defaultValue=''
          render={({ field: { value, onChange } }) => (
            <TextField
              label='Description'
              multiline
              rows={6}
              size='small'
              value={value}
              onChange={e => onChange(e.target.value)}
            />
          )}
        />
        <Controller
          control={control}
          name='date'
          defaultValue=''
          render={({ field: { value, onChange } }) => (
            <TextField
              label='End date'
              type='datetime-local'
              value={value}
              onChange={e => onChange(e.target.value)}
            />
          )}
        />
        <Button
          type='submit'
          onClick={handleSubmit(onSubmit)}
          variant='contained'
        >
          Submit
        </Button>
      </Stack>
    </form>
  )
}
