'use client';
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatboxAI({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [input, setInput] = useState("");
    const boxRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
                onClose();
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, onClose]);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { role: "user", content: input }]);
        setInput("");
        // Giả lập trả lời AI
        setTimeout(() => {
            setMessages(msgs => [...msgs, { role: "ai", content: "Đây là phản hồi từ AI." }]);
        }, 500);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed bottom-28 right-8 z-50"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0.4 }}
                >
                    <div ref={boxRef} className="w-80 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col">
                        <div className="flex items-center justify-between px-4 py-2 border-b">
                            <span className="font-semibold text-primary-600">AI Chat</span>
                            <button onClick={onClose} className="text-gray-400 hover:text-red-500 text-xl">&times;</button>
                        </div>
                        <div className="flex-1 p-4 max-h-64 overflow-y-auto space-y-2 bg-gray-50">
                            {messages.length === 0 && (
                                <div className="text-gray-400 text-sm text-center">Hãy hỏi AI bất cứ điều gì!</div>
                            )}
                            <AnimatePresence initial={false}>
                                {messages.map((msg, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={msg.role === "user" ? "text-right" : "text-left"}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <span className={msg.role === "user"
                                            ? "inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-lg mb-1"
                                            : "inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-lg mb-1"}>
                                            {msg.content}
                                        </span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            <div ref={messagesEndRef} />
                        </div>
                        <div className="flex border-t p-2 bg-white">
                            <input
                                className="flex-1 px-3 py-2 border rounded-l-lg outline-none text-sm"
                                placeholder="Nhập câu hỏi..."
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => e.key === "Enter" && handleSend()}
                            />
                            <button
                                className="bg-primary-500 text-white px-4 rounded-r-lg hover:bg-primary-600"
                                onClick={handleSend}
                            >
                                Gửi
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}