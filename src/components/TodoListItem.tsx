import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

export default function TodoListItem() {
  return (
    <li className="flex items-start gap-2 bg-gray-900 px-6 rounded-lg border border-gray-600">
      <Checkbox
        id="terms1"
        className="rounded-full border-primary border-3 w-5 h-5 mt-6 mr-3 cursor-pointer data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
      />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <Button variant="ghost" className="mt-4">
        <Trash2 className="size-5 text-gray-500" />
      </Button>
    </li>
  );
}
