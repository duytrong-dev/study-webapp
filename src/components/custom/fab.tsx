'use client';
import { Button } from "../ui/button";
import React, { useState } from "react";
import ChatboxAI from "./chatbox-ai";
import { motion } from "framer-motion";

export default function Fab() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.div
                className="fab fixed bottom-8 right-8 z-50 transition-all duration-300 ease-in-out transform hover:scale-110"
                onClick={() => setOpen(true)}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    bounce: 0.6,
                    duration: 1
                }}
            >
                <Button className="w-14 h-14 rounded-full bg-primary-500 text-white shadow-lg flex items-center justify-center hover:bg-primary-500">
                    <i className="fas fa-bolt text-xl"></i>
                </Button>
            </motion.div>
            <ChatboxAI open={open} onClose={() => setOpen(false)} />
        </>
    );
}