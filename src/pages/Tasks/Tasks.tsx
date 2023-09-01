import {
  Stack,
  Button,
  Container,
  Box,
  Typography,
  Modal,
  Alert,
} from '@mui/material'
import { useState } from 'react'
import type { FC } from 'react'

import { Task, TaskForm } from 'components'
import { withAuth } from 'hoc/withAuth'
import { useTasks } from 'hooks/useTasks'
import { useAuth } from 'hooks/useAuth'
import { ITask } from 'types/task'

import s from './tasks.module.css'

export const Tasks: FC = withAuth(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedTask, setSelectedTask] = useState<ITask | undefined>()

  const { items, remove, changeStatus, edit, create, error } = useTasks()
  const { logout } = useAuth()

  const onClose = () => {
    setSelectedTask(undefined)
    setIsOpen(false)
  }

  const onOpen = () => {
    setSelectedTask(undefined)
    setIsOpen(true)
  }

  const onEdit = (task: ITask) => {
    setSelectedTask(task)
    setIsOpen(true)
  }

  const onTaskSubmit = (data: ITask) => {
    if (data.id) {
      edit(data)
    } else {
      create(data)
    }

    setIsOpen(false)
  }

  return (
    <>
      <Container>
        <Stack
          justifyContent='start'
          alignItems='start'
          spacing={2}
          minWidth={'100%'}
        >
          <Stack
            minWidth={'100%'}
            justifyContent='space-between'
            direction='row'
          >
            <Button onClick={onOpen}>Create task</Button>
            <Button onClick={logout}>Logout</Button>
          </Stack>

          <Stack
            direction='row'
            justifyContent='space-around'
            alignItems='stretch'
            spacing={2}
            minWidth={'100%'}
          >
            <Box>
              <Typography variant='h4' gutterBottom>
                To Do
              </Typography>
              <Stack className={s.column} spacing={2} alignItems='center'>
                {items
                  .filter(t => t.status === 'todo')
                  .map(t => (
                    <Task
                      key={t.id}
                      task={t}
                      onRemove={remove}
                      onStatusChange={changeStatus}
                      onEdit={() => onEdit(t)}
                    />
                  ))}
              </Stack>
            </Box>
            <Box>
              <Typography variant='h4' gutterBottom>
                In Progress
              </Typography>
              <Stack className={s.column} spacing={2} alignItems='center'>
                {items
                  .filter(t => t.status === 'inprogress')
                  .map(t => (
                    <Task
                      key={t.id}
                      task={t}
                      onRemove={remove}
                      onStatusChange={changeStatus}
                      onEdit={() => onEdit(t)}
                    />
                  ))}
              </Stack>
            </Box>
            <Box>
              <Typography variant='h4' gutterBottom>
                Completed
              </Typography>
              <Stack className={s.column} spacing={2} alignItems='center'>
                {items
                  .filter(t => t.status === 'completed')
                  .map(t => (
                    <Task
                      key={t.id}
                      task={t}
                      onRemove={remove}
                      onStatusChange={changeStatus}
                      onEdit={() => onEdit(t)}
                    />
                  ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>

      <Modal className={s.modal} open={isOpen} onClose={onClose}>
        <Box className={s.modalBody}>
          <TaskForm initialValue={selectedTask} onSubmit={onTaskSubmit} />
        </Box>
      </Modal>
      {error && <Alert color='error'>{error}</Alert>}
    </>
  )
})
