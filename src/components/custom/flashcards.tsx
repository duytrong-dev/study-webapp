'use client';
import { useState, useRef } from 'react';

const flashcards = [
  {
    title: 'Python',
    question: 'Hàm `print()` trong Python dùng để làm gì?',
    answer: 'Hàm `print()` dùng để xuất thông tin ra màn hình console.',
  },
  {
    title: 'JavaScript',
    question: 'Toán tử `===` khác gì `==` trong JS?',
    answer: '`===` so sánh cả giá trị và kiểu dữ liệu, còn `==` chỉ so sánh giá trị.',
  },
  {
    title: 'React',
    question: 'Hook `useState` dùng để làm gì?',
    answer: 'Dùng để khai báo và quản lý state trong functional component.',
  },
];

const SWIPE_THRESHOLD = 100;

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    startXRef.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    setDragX(deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragX > SWIPE_THRESHOLD) {
      handleChange('left');
    } else if (dragX < -SWIPE_THRESHOLD) {
      handleChange('right');
    } else {
      setDragX(0);
    }
    setIsDragging(false);
  };

  const handleChange = (dir: 'left' | 'right') => {
    setDragX(dir === 'left' ? 300 : -300);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        dir === 'right'
          ? (prev + 1) % flashcards.length
          : (prev - 1 + flashcards.length) % flashcards.length
      );
      setDragX(0);
      setIsFlipped(false);
    }, 300);
  };

  const currentCard = flashcards[currentIndex];

  return (
    <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Flashcards gần đây</h2>
        <button className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
          <i className="fas fa-plus mr-1"></i> Tạo mới
        </button>
      </div>

      <div className="p-4">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="w-full h-48 relative perspective cursor-pointer select-none"
          style={{
            transform: `translateX(${dragX}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease',
          }}
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden bg-white dark:bg-dark-700 rounded-lg p-4 flex flex-col items-center justify-center shadow z-10">
              <div className="text-xl font-medium mb-2">{currentCard.title}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Câu hỏi</div>
              <div className="mt-4 text-center">{currentCard.question}</div>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white dark:bg-dark-700 rounded-lg p-4 flex flex-col items-center justify-center shadow z-0">
              <div className="text-xl font-medium mb-2">{currentCard.title}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Trả lời</div>
              <div className="mt-4 text-center">{currentCard.answer}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={() => handleChange('left')}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300"
          >
            <i className="fas fa-arrow-left mr-1"></i> Trước
          </button>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {currentIndex + 1}/{flashcards.length}
          </div>
          <button
            onClick={() => handleChange('right')}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300"
          >
            Sau <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
