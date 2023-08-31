import { Button, Stack, TextField, Typography } from '@mui/material'
import type { FC } from 'react'
import React from 'react'

export const AuthForm: FC = () => {
  return (
    <form>
      <Stack spacing={2}>
        <Typography variant='h4'>Authentication</Typography>
        <TextField label='Email' fullWidth size='small' />
        <TextField label='Password' type='password' fullWidth size='small' />
        <Stack direction='row' spacing={1}>
          <Button variant='contained'>Sign in</Button>
          <Button variant='contained'>Sign up</Button>
        </Stack>
      </Stack>
    </form>
  )
}
