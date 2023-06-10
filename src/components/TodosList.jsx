import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todos,
  handleCheckBox,
  handleDelete,
  handleSave,
}) {
  return (
    <ul className="todo-list">
      {todos.map((element) => (
        <TodoItem
          key={element.id}
          item={element}
          handleCheckBox={handleCheckBox}
          handleDelete={handleDelete}
          handleSave={handleSave}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    todo: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  handleCheckBox: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default TodosList;
