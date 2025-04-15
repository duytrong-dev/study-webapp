import { Button } from "../ui/button";

export default function Fab() {
    return (
        <div className="fab fixed bottom-8 right-8 z-50 transition-all duration-300 ease-in-out transform hover:scale-110">
            <Button className="w-14 h-14 rounded-full bg-primary-500 text-white shadow-lg flex items-center justify-center hover:bg-primary-500">
                <i className="fas fa-bolt text-xl"></i>
            </Button>
        </div>
    )
}