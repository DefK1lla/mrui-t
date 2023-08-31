import { Task } from 'components'

import './App.css'
import { ITask } from './types/task'

const taskMock: ITask = {
  id: '1',
  title: 'task',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem consequuntur expedita dolores, ipsa suscipit nobis odio laborum quo ducimus quia magnam, quibusdam eligendi iste laudantium incidunt sunt non, perferendis debitis!',
  date: 'ISODate',
  status: 'todo',
}

const App: React.FC = () => {
  return (
    <div className='App'>
      <Task
        task={taskMock}
        onRemove={console.log}
        onEdit={console.log}
        onStatusChange={console.log}
      />
    </div>
  )
}

export default App
