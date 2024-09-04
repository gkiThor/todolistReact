import { useState } from "react"
import { nanoid } from "nanoid"
import ListItem from "./components/ListItem";

function App() {
  
  const [todoList, setTodoList] = useState([
    {id:nanoid(6), content: 'item 1'},
    {id:nanoid(6), content: 'item 2'},
    {id:nanoid(6), content: 'item 3'}
  ])

  const [todo, setTodo] = useState("")
  const [showValidation, setShowValidation] = useState(false)

  console.log(todoList);

  /* Suppression d'une tache */
  function deleteTodo(id){
    setTodoList(todoList.filter(todo => todo.id !== id));
  }

  function handleSubmit(e){
    e.preventDefault();

    if(todo === ""){
      setShowValidation(true);
      return
    }

    setTodoList([...todoList, {id: nanoid(), content: todo}]);/* Nouveau tableau */
    setTodo("");
    setShowValidation(false);
  }

  return (
    /* Structure de base avec fond gris clair*/
    <div className="h-screen bg-slate-300">
      
      {/*  Structure principal contenant le titre centrer */}
      <div className="max-w-4xl mx-auto pt-20 px-6 ">
        <h1 className="text-3xl text-slate-950 text-center">To-do liste</h1>

        {/*  Formulaire */}
        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-slate-950">Ajouter une tâche ...</label>
          <input value={todo} onChange={e => setTodo(e.target.value)} type="text" className="mt-1 block w-full rounded"/>{/* Le input text prend toute la largeur */}
         
          {showValidation && (
            <p className="text-red-500">
              Ajoutez du contenu à la liste de tâche
            </p>
          )}

          <button className="mt-4 py-2 bg-slate-600 rounded min-w-[120px] text-slate-50">Ajouter</button>
        </form>

        {/*  Liste de tâche */}
        <ul>
          {todoList.length === 0 &&(
            <li className="text-slate-950">Il n'y a pas de listes...</li>
          )}


          {todoList.length > 0 && 
          todoList.map(item => (
             <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo}/>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default App
