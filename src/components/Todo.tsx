import Header from "./Header";
import { NotebookPen } from "lucide-react";
import TodoList from "./TodoList";
import { useState, useEffect } from "react";

export default function Todo() {
   const [tasks, setTasks] = useState([
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

   // Monitora mudanças no estado tasks
   useEffect(() => {
      console.log("Tarefas atualizadas:", tasks);
   }, [tasks]);

   return (
      <>
         <Header onSubmitTask={onSubmitTask} />
         <div className="container--780 mb-20">
            <div className="flex justify-between mb-4">
               <div className="flex gap-2 items-center">
                  <p className="text-primary font-bold">Tarefas criadas </p>
                  <span className="rounded-full pt-1 px-3  bg-gray-600 font-bold text-sm">{tasks.length}</span>
               </div>

               <div className="flex gap-2 items-center">
                  <p className="text-secondary font-bold">Concluídas</p>
                  <span className="rounded-full pt-1 px-3  bg-gray-600 font-bold text-sm">
                     {tasks.filter((task) => task.isCompleted).length}
                  </span>
               </div>
            </div>

            <TodoList tasks={tasks} onUpdateTask={onUpdateTask} />

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
