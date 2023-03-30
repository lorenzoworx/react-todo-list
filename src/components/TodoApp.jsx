import Header from './Header';
import TodosLogic from './TodosLogic';

export default function TodoApp() {
  return (
    <div className="todoApp">
      <Header />
      <TodosLogic />
    </div>
  );
}
