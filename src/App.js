import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'
import Modal from '@material-ui/core/Modal';

const App = () =>{
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Euclid',
        day: 'April 7th',
        reminder: true,

    },
    {
      id: 2,
      text: 'Check-in meeting',
      day: 'April 8th',
      reminder : true,
   },
    {
        id: 3,
        text: 'Data project',
        day: 'April 12th',
        reminder: true,
    },
    {
        id: 4,
        text: 'Hypatia',
        day: 'April 14th',
        reminder: true,
    },
])

const [modalOpen, toggleModalOpen] = useState(false)

  return (
    <div className="container">

      <Header title="Tasks title" onClick={() => toggleModalOpen(!modalOpen) }/>
      <Tasks tasks={tasks} onClick={(id) => console.log(id)}/>
      <Modal
        open={modalOpen}
        onClose={() => toggleModalOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style = {modalStyling}
      >
        <div style={bodyStyling}>Here is the modal</div>
      </Modal>
      
    </div>

  );
}


const modalStyling = {
  cursor: 'pointer',
}

const bodyStyling = {
  backgroundColor: 'blue',
  color: 'red',
  position: 'absolute',
  top: 'calc(50% - 100px)',
  left: 'calc(50% - 150px)',
  width: 300,
  height: 200,
  fontSize: '40px',
  textAlign: 'center',
  paddingTop: 40,
  marginTop: 40,
}



export default App;
