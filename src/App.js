import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'


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

  return (
    <div className="container">

      <Header />
      <Tasks tasks={tasks} />

      
    </div>

  );
}

export default App;
