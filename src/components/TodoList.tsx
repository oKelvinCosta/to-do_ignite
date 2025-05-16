import TodoListItem from "./TodoListItem";
import type { Tasks } from "./Todo";

interface TodoListProps {
  tasks: Tasks[];
  onUpdateTask: (taskId: number, isCompleted: boolean) => void;
  onDeleteTask: (taskId: number) => void;
}

export default function TodoList({ tasks, onUpdateTask, onDeleteTask }: TodoListProps) {
  return (
    <ul className="flex flex-col gap-6">
      {tasks.map((task) => (
        <TodoListItem key={task.id} task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
      ))}
    </ul>
  );
}
