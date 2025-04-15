import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export default function MobileButton() {
    return (
        <Button className="md:hidden bg-transparent hover:bg-gray-300 group cursor-pointer">
            <Menu className="w-5 h-5 text-gray-500 group-hover:text-white" />
        </Button>
    )
}