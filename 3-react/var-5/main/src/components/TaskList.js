import { useState, useEffect } from 'react'
import store from '../stores/TaskStore'
import Task from './Task'
import SelectedTask from './SelectedTask'

function TaskList () {
	const [tasks, setTasks] = useState([])
	const [selectedTask, setSelectedTask] = useState({})

	useEffect(() => {
		setTasks(store.getItems())
		store.emitter.addEventListener('UPDATE', () => {
			setTasks([...store.getItems()])
		})
	}, [])

	const select = (item) => {
		setSelectedTask(item)
	}

	// TODO

	return (
		<div>	
			{/* TODO */}
			<div>
				{
					tasks.map((e) => 
						<Task item={e} key={e.id} onSelect={select} />
					)
				}
			</div>
		</div>
	)
}

export default TaskList
