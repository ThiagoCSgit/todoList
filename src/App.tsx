import './style.css'
import {useState} from 'react';
import {Item} from './types/item'
import {ListItem} from './components/ListItem'
import {AddArea} from './components/AddArea'
import todoList from "./todoList.json"

const App = () => {


  const [list, setList] = useState<Item[]>(todoList)


  function handleAddTask(taskName: string){
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  function handleDoneTask(statusTask: boolean, taskId: number){
    let newList = [...list]
    setList(newList.map(item => {
      if(item.id == taskId){
        item.done = statusTask
      }
      return item
    }))
  }

  return (
    <div className="container">
      <div className="area">
        <h1 className="header">Lista de Tarefas</h1>
        <AddArea onEnter={handleAddTask}></AddArea>

        {list.map((item, index) => <ListItem key={index} item={item} handleStatus={handleDoneTask}></ListItem>)}
      </div>
    </div>
  );
}

export default App;