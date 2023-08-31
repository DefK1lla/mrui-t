import { Stack, Button, Container, Box, Typography } from '@mui/material'
import type { FC } from 'react'

import { Task } from 'components'
import type { ITask } from '@/types/task'

import s from './tasks.module.css'

const tasksMock: ITask[] = [
  {
    id: '1',
    title: 'task',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem consequuntur expedita dolores, ipsa suscipit nobis odio laborum quo ducimus quia magnam, quibusdam eligendi iste laudantium incidunt sunt non, perferendis debitis!',
    date: 'ISODate',
    status: 'completed',
  },
  {
    id: '2',
    title: 'task',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem consequuntur expedita dolores, ipsa suscipit nobis odio laborum quo ducimus quia magnam, quibusdam eligendi iste laudantium incidunt sunt non, perferendis debitis!',
    date: 'ISODate',
    status: 'inprogress',
  },
  {
    id: '3',
    title: 'task',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem consequuntur expedita dolores, ipsa suscipit nobis odio laborum quo ducimus quia magnam, quibusdam eligendi iste laudantium incidunt sunt non, perferendis debitis!',
    date: 'ISODate',
    status: 'todo',
  },
  {
    id: '4',
    title: 'task',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem consequuntur expedita dolores, ipsa suscipit nobis odio laborum quo ducimus quia magnam, quibusdam eligendi iste laudantium incidunt sunt non, perferendis debitis!',
    date: 'ISODate',
    status: 'completed',
  },
]

export const Tasks: FC = () => {
  return (
    <Container>
      <Stack
        justifyContent='start'
        alignItems='start'
        spacing={2}
        minWidth={'100%'}
      >
        <Button>Create task</Button>

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
              {tasksMock
                .filter(t => t.status === 'todo')
                .map(t => (
                  <Task
                    key={t.id}
                    task={t}
                    onRemove={console.log}
                    onEdit={console.log}
                    onStatusChange={console.log}
                  />
                ))}
            </Stack>
          </Box>
          <Box>
            <Typography variant='h4' gutterBottom>
              In Progress
            </Typography>
            <Stack className={s.column} spacing={2} alignItems='center'>
              {tasksMock
                .filter(t => t.status === 'inprogress')
                .map(t => (
                  <Task
                    key={t.id}
                    task={t}
                    onRemove={console.log}
                    onEdit={console.log}
                    onStatusChange={console.log}
                  />
                ))}
            </Stack>
          </Box>
          <Box>
            <Typography variant='h4' gutterBottom>
              Completed
            </Typography>
            <Stack className={s.column} spacing={2} alignItems='center'>
              {tasksMock
                .filter(t => t.status === 'completed')
                .map(t => (
                  <Task
                    key={t.id}
                    task={t}
                    onRemove={console.log}
                    onEdit={console.log}
                    onStatusChange={console.log}
                  />
                ))}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}
