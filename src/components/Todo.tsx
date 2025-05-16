import Header from "./Header";
import { NotebookPen } from "lucide-react";
import TodoList from "./TodoList";

export default function Todo() {
  // const [tasks, setTasks] = useState([]);

  return (
    <>
      <Header />
      <div className="container--780 mb-20">
        <div className="flex justify-between mb-4">
          <div className="flex gap-2 items-center">
            <p className="text-primary font-bold">Tarefas criadas </p>
            <span className="rounded-full px-3  bg-gray-600 font-bold">5</span>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-secondary font-bold">Concluídas</p>
            <span className="rounded-full px-3  bg-gray-600 font-bold">5</span>
          </div>
        </div>

        <TodoList />

        <div id="void" className="text-center mt-18">
          <NotebookPen className="size-10 mx-auto text-gray-600" />
          <p>
            <b>Você ainda não tem tarefas cadastradas</b>
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </>
  );
}
