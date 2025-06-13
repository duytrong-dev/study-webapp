'use client';
import { Button } from "../ui/button";
import React ,{ useState } from "react";
import ChatboxAI from "./chatbox-ai";

export default function Fab() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className="fab fixed bottom-8 right-8 z-50 transition-all duration-300 ease-in-out transform hover:scale-110"
                onClick={() => setOpen(true)}
            >
                <Button className="w-14 h-14 rounded-full bg-primary-500 text-white shadow-lg flex items-center justify-center hover:bg-primary-500">
                    <i className="fas fa-bolt text-xl"></i>
                </Button>
            </div>
            <ChatboxAI open={open} onClose={() => setOpen(false)} />
        </>
    );
}