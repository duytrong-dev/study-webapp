'use client'
import { useEffect, useState } from "react";

const counterConfig = [
    {
        icon: <i className="fas fa-users text-3xl text-primarycolor-blue"></i>,
        bg: "bg-primarycolor-blue/10",
        label: "Người học",
        color: "text-primarycolor-blue",
        target: 250000,
        duration: 3,
    },
    {
        icon: <i className="fas fa-book text-3xl text-[#FF9D60]"></i>,
        bg: "bg-[#FF9D60]/10",
        label: "Khóa học",
        color: "text-[#FF9D60]",
        target: 1500,
        duration: 2.5,
    },
    {
        icon: <i className="fas fa-chalkboard-teacher text-3xl text-[#8b5cf6]"></i>,
        bg: "bg-[#8b5cf6]/10",
        label: "Giảng viên",
        color: "text-[#8b5cf6]",
        target: 320,
        duration: 2,
    },
    {
        icon: <i className="fas fa-globe-asia text-3xl text-[#0d9488]"></i>,
        bg: "bg-[#0d9488]/10",
        label: "Quốc gia",
        color: "text-[#0d9488]",
        target: 124,
        duration: 1.5,
    },
];

export default function StatisticalSection() {
    const [counts, setCounts] = useState(counterConfig.map(() => 0));

    useEffect(() => {
        counterConfig.forEach((config, idx) => {
            let current = 0;
            const increment = Math.ceil(config.target / (config.duration * 50));
            const timer = setInterval(() => {
                current += increment;
                if (current >= config.target) {
                    current = config.target;
                    clearInterval(timer);
                }
                setCounts(prev => {
                    const next = [...prev];
                    next[idx] = current;
                    return next;
                });
            }, 20);
        });
    }, []);

    return (
        <div className="radial-gradient py-16">
            <section id="counter" className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {counterConfig.map((item, idx) => (
                        <div key={idx} className="counter-item bg-white/80 backdrop-blur rounded-2xl p-8 border border-gray-100 shadow-lg">
                            <div className={`${item.bg} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6`}>
                                {item.icon}
                            </div>
                            <p className="text-4xl md:text-5xl font-bold text-gray-600 mb-2">
                                {new Intl.NumberFormat().format(counts[idx])}
                            </p>
                            <p className="text-gray-600">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}