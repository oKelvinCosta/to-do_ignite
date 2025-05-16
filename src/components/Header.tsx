import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Logo from "../assets/todo-logo.svg";
import { CirclePlus } from "lucide-react";

interface HeaderProps {
  onSubmitTask: (taskContent: string) => void;
}

export default function Header({ onSubmitTask }: HeaderProps) {
  const [newTask, setNewTask] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmitTask(newTask);
    setNewTask("");
  }

  return (
    <header className="relative h-[200px] mb-20 flex  item-center justify-center bg-gray-900">
      <div className="container--780 flex flex-col items-center justify-center">
        <img src={Logo} alt="To do logo" className="w-full max-w-[120px]" />

        <div className="container--780 flex justify-center gap-2 absolute bottom-[-24px]">
          <form onSubmit={handleSubmit} className="flex item-center gap-2 w-full">
            <Input
              placeholder="Add new task"
              className="p-6 bg-gray-900 border border-secondary/50 focus:border-secondary focus-visible:border-secondary"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              required
            />
            <Button type="submit" className="h-full px-6">
              Create
              <CirclePlus className="size-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
}
