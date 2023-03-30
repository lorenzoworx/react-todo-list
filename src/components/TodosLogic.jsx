import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Storage from '../storage';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
// import './TodosList.css';

const storage = new Storage();

export default function TodosLogic() {
  const [todos, setTodos] = useState(storage.getLocalStorage);

  useEffect(() => {
    storage.updateLocalStorage(todos);
  }, [todos]);

  const handleCheckBox = (id) => {
    setTodos((prev) => prev.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          completed: !element.completed,
        };
      }
      return element;
    }));
  };

  const addItem = (todo) => {
    const newtodo = {
      id: uuidv4(),
      todo,
      completed: false,
    };
    setTodos([...todos, newtodo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((element) => element.id !== id));
  };

  const handleSave = (id, title) => {
    setTodos((prev) => prev.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          todo: title,
        };
      }
      return element;
    }));
  };

  const handleClearAll = () => {
    setTodos(todos.filter((element) => !element.completed));
  };

  return (
    <div className="todo-logic">
      <InputTodo addItem={addItem} />
      <TodosList
        todos={todos}
        handleCheckBox={handleCheckBox}
        handDelete={handleDelete}
        handleSave={handleSave}
      />
      <button type="button" className="clear" onClick={handleClearAll}>Clear All</button>
    </div>
  );
}
