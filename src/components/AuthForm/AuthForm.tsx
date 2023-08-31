import { Button, Stack, TextField, Typography } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import type { FC } from 'react'
import React from 'react'
import { IUserData } from '@/types/userData'

interface IAuthFormProps {
  onSignIn: (data: IUserData) => void
  onSignUp: (data: IUserData) => void
  errorMessage?: string | null
}

export const AuthForm: FC<IAuthFormProps> = ({
  onSignIn,
  onSignUp,
  errorMessage = null,
}) => {
  const { handleSubmit, control } = useForm<IUserData>({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  return (
    <form>
      <Stack spacing={2}>
        <Typography variant='h4'>Authentication</Typography>
        <Typography>{errorMessage}</Typography>
        <Controller
          control={control}
          name='email'
          rules={{
            required: true,
            validate: value => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
          }}
          defaultValue=''
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <TextField
              label='Email'
              fullWidth
              size='small'
              value={value}
              error={invalid}
              helperText={invalid && 'Write a valid email'}
              onChange={e => onChange(e.target.value)}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          rules={{
            required: true,
            minLength: 6,
          }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <TextField
              label='Password'
              type='password'
              fullWidth
              size='small'
              value={value}
              error={invalid}
              helperText={invalid && 'Min length 6'}
              onChange={e => onChange(e.target.value)}
            />
          )}
        />
        <Stack direction='row' spacing={1}>
          <Button
            onClick={handleSubmit(onSignIn)}
            type='submit'
            variant='contained'
          >
            Sign in
          </Button>
          <Button
            onClick={handleSubmit(onSignUp)}
            type='submit'
            variant='contained'
          >
            Sign up
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}
