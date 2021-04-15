import Task from './Task'

const Tasks = ({tasks, onClick}) => {
    

    return (

        <>
        {tasks.map((arrayElement) => (
            <Task key={arrayElement.id} task={arrayElement} onClick={onClick} />
        ))}
        </>
    )
}

export default Tasks

//whghrgowrotjgoiajwroitjfowijieocjfqw4acnuq348wtn0q4wcut0q3w4umc0qiwjrav 0gieoar joih i
