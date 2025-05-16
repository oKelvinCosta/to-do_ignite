import Header from "./Header";
import { NotebookPen } from "lucide-react";
import TodoList from "./TodoList";
import { useState, useEffect } from "react";

export interface Tasks {
  id: number;
  content: string;
  isCompleted: boolean;
}

export default function Todo() {
  const [tasks, setTasks] = useState<Tasks[]>([
    {
      id: 1,
      content:
        "Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Morbi viverra placerat justo, vel pharetra turpis.",
      isCompleted: false,
    },
  ]);

  function onSubmitTask(taskContent: string) {
    const newTask = {
      id: tasks.length + 1,
      content: taskContent,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onUpdateTask(taskId: number, isCompleted: boolean) {
    console.log(taskId, isCompleted);
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isCompleted = isCompleted;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function onDeleteTask(taskId: number) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  // Monitora mudanças no estado tasks
  useEffect(() => {
    console.log("Tarefas atualizadas:", tasks);
  }, [tasks]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSubmitTask={onSubmitTask} />
      <main className="container--780 mb-8 flex-1 flex flex-col px-8">
        <div className="flex justify-between mb-4">
          <div className="flex gap-2 items-center">
            <p className="text-primary font-bold">Tarefas criadas </p>
            <span className="rounded-full pt-1 px-3 bg-gray-600 font-bold text-sm">{tasks.length}</span>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-secondary font-bold">Concluídas</p>
            <span className="rounded-full pt-1 px-3 bg-gray-600 font-bold text-sm">
              {tasks.filter((task) => task.isCompleted).length}
            </span>
          </div>
        </div>

        {tasks.length > 0 ? (
          <TodoList tasks={tasks} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
        ) : (
          <Void />
        )}
      </main>

      <footer className="py-4">
        <div className="container--780">
          <p className="text-center font-bold !text-xs">
            Feito por <br />
            KELVIN COSTA
          </p>
        </div>
      </footer>
    </div>
  );
}

function Void() {
  return (
    <div id="void" className="text-center mt-18 flex-1">
      <NotebookPen className="size-10 mx-auto text-gray-600" />
      <p>
        <b>Você ainda não tem tarefas cadastradas</b>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
