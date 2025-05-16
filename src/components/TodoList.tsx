import TodoListItem from "./TodoListItem";

export default function TodoList() {
  return (
    <ul className="flex flex-col gap-6">
      <TodoListItem />
    </ul>
  );
}
