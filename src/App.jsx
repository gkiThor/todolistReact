import { useState } from "react"
import { nanoid } from "nanoid"
import ListItem from "./components/ListItem";

function App() {
  
  const [todoList, setTodoList] = useState([
    {id:nanoid(6), content: 'item 1'},
    {id:nanoid(6), content: 'item 2'},
    {id:nanoid(6), content: 'item 3'}
  ])

  console.log(todoList);

  function deleteTodo(id){
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    /* Structure de base avec fond gris clair*/
    <div className="h-screen bg-slate-300">
      
      {/*  Structure principal contenant le titre centrer */}
      <div className="max-w-4xl mx-auto pt-20 px-6 ">
        <h1 className="text-3xl text-slate-950 text-center">To-do liste</h1>

        {/*  Formulaire */}
        <form className="mb-10">
          <label htmlFor="todo-item" className="text-slate-950">Ajouter une tâche ...</label>
          <input type="text" className="mt-1 block w-full rounded"/>{/* Le input text prend toute la largeur */}
          <button className="mt-4 py-2 bg-slate-600 rounded min-w-[120px] text-slate-50">Ajouter</button>
        </form>

        {/*  Liste de tâche */}
        <ul>
          {todoList.length === 0 &&(
            <li className="text-slate-950">Il n'y a pas de listes...</li>
          )}


          {todoList.map(item => (
             <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo}/>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default App
