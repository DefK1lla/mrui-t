import { TextField, Stack, Button, Typography } from '@mui/material'
import type { FC } from 'react'

export const TaskForm: FC = () => {
  return (
    <form>
      <Stack spacing={2}>
        <Typography variant='h4'>Fill the form</Typography>
        <TextField label='Title' fullWidth size='small' />
        <TextField
          label='Description'
          multiline
          rows={6}
          size='small'
          fullWidth
        />
        <TextField label='End date' type='datetime-local' value={new Date()} />
        <Button variant='contained'>Submit</Button>
      </Stack>
    </form>
  )
}
