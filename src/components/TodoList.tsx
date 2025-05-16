import TodoListItem from "./TodoListItem";

export default function TodoList({ tasks, onUpdateTask, onDeleteTask }) {
  return (
    <ul className="flex flex-col gap-6">
      {tasks.map((task) => (
        <TodoListItem key={task.id} task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
      ))}
    </ul>
  );
}
