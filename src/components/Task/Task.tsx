import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Stack,
  Box,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material'
import type { FC, MouseEvent } from 'react'

import type { ITask } from '@/types/task'
import { TStatus } from '@/types/status'

import s from './task.module.css'

interface ITaskProps {
  task: ITask
  onRemove: (id: string) => void
  onEdit: (task: ITask) => void
  onStatusChange: (id: string, status: TStatus) => void
}

export const Task: FC<ITaskProps> = ({
  task,
  onRemove,
  onEdit,
  onStatusChange,
}) => {
  const handleChange = (_: MouseEvent<HTMLElement>, newStatus: TStatus) => {
    onStatusChange(task.id!, newStatus)
  }

  return (
    <Stack direction='row' spacing={2}>
      <Card className={s.card}>
        <CardContent>
          <Box className={s.info}>
            <Typography variant='body2' color='text.secondary' gutterBottom>
              {task.date}
            </Typography>
            <Typography variant='h5'>{task.title}</Typography>
            <Typography className={s.body} variant='body1'>
              {task.description}
            </Typography>
          </Box>

          <Box>
            <Typography variant='body2'>Status:</Typography>
            <ToggleButtonGroup
              size='small'
              color='primary'
              value={task.status}
              onChange={handleChange}
              exclusive={true}
            >
              <ToggleButton value='todo'>To do</ToggleButton>
              <ToggleButton value='inprogress'>In progress</ToggleButton>
              <ToggleButton value='completed'>Completed</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </CardContent>
        <CardActions>
          <Stack
            minWidth={'100%'}
            direction='row'
            justifyContent='space-around'
          >
            <Button onClick={() => onEdit(task)} size='small'>
              Edit
            </Button>
            <Button
              onClick={() => onRemove(task.id!)}
              size='small'
              color='error'
            >
              Remove
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Stack>
  )
}
