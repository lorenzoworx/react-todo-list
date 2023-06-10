import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function InputTodo({ addItem }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addItem(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-text"
        type="text"
        id="todo-input"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
      />
      <button type="submit">
        <FaPlusCircle />
      </button>
    </form>
  );
}

InputTodo.propTypes = {
  addItem: PropTypes.func.isRequired,
};
