import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

interface TodoListItemProps {
   task: {
      id: number;
      content: string;
      isCompleted: boolean;
   };
   onUpdateTask: (taskId: number, isCompleted: boolean) => void;
}

export default function TodoListItem({ task, onUpdateTask }: TodoListItemProps) {
   return (
      <li className="flex items-start gap-2 bg-gray-900 px-6 rounded-lg border border-gray-600">
         <Checkbox
            id="terms1"
            className={`rounded-full border-primary border-3 w-5 h-5 mt-[21px] mr-3 cursor-pointer data-[state=checked]:bg-secondary data-[state=checked]:border-secondary`}
            onCheckedChange={() => {
               onUpdateTask(task.id, !task.isCompleted);
            }}
            checked={task.isCompleted}
         />
         <p className="text-left w-full">{task.isCompleted ? <s>{task.content}</s> : task.content}</p>
         <Button variant="ghost" className="mt-4 !px-2">
            <Trash2 className="size-5 text-gray-500" />
         </Button>
      </li>
   );
}
