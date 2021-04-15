import { FaTimes } from 'react-icons/fa'

const Task = ({task, onClick}) => {
    return (
        <div className="task">
            <h3>
                {task.text} 
                <FaTimes style={FatimesStyling} onClick={() => onClick(task.id)} />  
            </h3>
            <p>{task.day}</p>
        </div>
    )
}   

const FatimesStyling = {
    color: 'red',
    cursor: 'pointer',

}

export default Task
