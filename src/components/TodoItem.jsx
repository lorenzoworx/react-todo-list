import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillDelete, AiFillEdit, AiFillSave } from 'react-icons/ai';

export default function TodoItem({
  item,
  handleCheckBox,
  handleDelete,
  handleSave,
}) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(item.todo);

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleEdit = (e) => {
    setTitle(e.target.value);
  };

  const saveClick = () => {
    setEdit(false);
    handleSave(item.id, title);
  };

  return (
    <li>
      <div className={edit ? 'disable' : 'todoItem'}>
        <div>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleCheckBox(item.id)}
          />
          <span className={item.completed ? 'mark' : ''}>{title}</span>
        </div>
        <div>
          <button type="button" onClick={handleEditClick} className="svgBtn">
            <AiFillEdit />
          </button>
          <button type="button" onClick={() => handleDelete(item.id)} className="svgBtn">
            <AiFillDelete />
          </button>
        </div>
      </div>
      <div className={edit ? 'todo-item' : 'hide'}>
        <input
          className="edit-input"
          type="text"
          value={title}
          onChange={handleEdit}
        />
        <button type="button" onClick={() => saveClick(item.id, title)}>
          <AiFillSave />
        </button>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    todo: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleCheckBox: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,

};
