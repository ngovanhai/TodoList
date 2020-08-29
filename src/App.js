import React, { useState } from 'react';

import TodoForm from './component/TodoForm';
import './App.css';
import TodoList from './component/colorBox/TodoList';
import shortid from 'shortid';
import Button from '@material-ui/core/Button';

function App() {
  const [todolist, setTodoList] = useState([
    { "id": 1, "title": "vc1", "complete": false }

  ]);
  const list = [];
  console.log("list", list)


  function handleTodoFormSubmit(formValues) {
    if (formValues.title) {
      const Id = shortid();
      console.log('form submit :', formValues);
      const newTodo = {
        id: Id,
        complete: false,
        ...formValues,
      }
      //add new todo to current toto list
      const newTodoList = [...todolist];
      newTodoList.push(newTodo);
      setTodoList(newTodoList);
      console.log(newTodoList);
    } else {
      alert("nhap cong vc can lam");
    }
  }


  function handleTodoClick(todo) {
    //console.log('form submit :', todo);
    const index = todolist.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todolist]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList);
  }
  function markItemCompleted(todoId) {
    var updatedItems = todolist.map(todo => {
      if (todoId === todo.id) todo.complete = !todo.complete;
      return todo;
    });
    setTodoList(updatedItems);
  }

  function handleClickAll() {
    console.log(todolist);
  }

  function handClickActive() {
    const Active = todolist.filter(todo => (todo.complete == false))
    setTodoList(Active)

  }

  function handleClickCompleted() {
    const Completed = todolist.filter(todo => (todo.complete == true))
    console.log("Complete", Completed);

  }


  return (
    <div className="App">
      <div className="container">
        <h1> TodoList</h1>
        <TodoForm onSubmit={handleTodoFormSubmit} />
        <TodoList
          todos={todolist}
          onTodoClick={handleTodoClick}
          onItemCompleted={markItemCompleted}
        />
        <div>
          <Button variant="outlined" color="primary" onClick={() => handleClickAll("all")}>All</Button>
          <Button variant="outlined" color="secondary" onClick={() => handClickActive("active")}>Active</Button>
          <Button variant="outlined" onClick={() => handleClickCompleted("completed")}>Completed</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
