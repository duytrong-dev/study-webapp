import Link from 'next/link';

interface CourseCardProps {
  iconClass: string;
  bgColor: string;
  title: string;
  description: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  href: string;
}

export default function CourseCard({
  iconClass,
  bgColor,
  title,
  description,
  progress,
  totalLessons,
  completedLessons,
  href,
}: CourseCardProps) {
  return (
    <div className="course-card bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition duration-300 ease-in-out relative">
      <div className={`h-40 ${bgColor} flex items-center justify-center`}>
        <i className={`${iconClass} text-white text-5xl`}></i>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <div className="course-actions absolute right-4 top-4 flex space-x-1">
            <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
              <i className="fas fa-ellipsis-v"></i>
            </button>
            <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
              <i className="fas fa-bookmark"></i>
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{description}</p>

        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>Tiến độ</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 transition-[width] duration-500">
            <div className={`h-2 rounded-full bg-primarycolor-blue`} style={{ width: `${progress}%`}}></div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <i className="fas fa-check-circle text-green-500 mr-1 text-sm"></i>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {completedLessons}/{totalLessons} bài
            </span>
          </div>
          <Link href={href} className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-md hover:bg-primary-200 dark:hover:bg-primary-800">
            {progress > 0 ? 'Tiếp tục học' : 'Bắt đầu học'}
          </Link>
        </div>
      </div>
    </div>
  );
}
