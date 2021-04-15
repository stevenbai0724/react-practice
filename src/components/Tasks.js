import Task from './Task'

const Tasks = ({tasks}) => {
    

    return (

        <>
        {tasks.map((arrayElement) => (
            <Task key={arrayElement.id} task={arrayElement} />
        ))}
        </>
    )
}

export default Tasks
