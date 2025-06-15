'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useRef } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  BarController
);

const labels = ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4', 'Tuần này'];

const data = {
  labels,
  datasets: [
    {
      label: 'Thời gian học (giờ)',
      data: [8.2, 9.5, 7.8, 10.2, 12.5],
      backgroundColor: 'rgba(59, 130, 246, 0.7)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
      borderRadius: 4,
      yAxisID: 'y',
      type: 'bar' as const,
    },
    {
      label: 'Năng suất (%)',
      data: [72, 78, 75, 82, 85],
      borderColor: 'rgba(16, 185, 129, 1)',
      backgroundColor: 'rgba(16, 185, 129, 0.7)',
      borderWidth: 2,
      tension: 0.3,
      yAxisID: 'y1',
      type: 'line' as const,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Giờ học',
        color: '#6b7280',
      },
      grid: {
        color: 'rgba(229, 231, 235, 0.5)',
      },
      ticks: {
        color: '#6b7280',
      },
    },
    y1: {
      beginAtZero: true,
      max: 100,
      position: 'right' as const,
      title: {
        display: true,
        text: 'Năng suất (%)',
        color: '#6b7280',
      },
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        color: '#6b7280',
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#6b7280',
      },
    },
  },
};

export default function StudyProductivityChart() {
  const chartRef = useRef(null);

  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
        Thời gian học & Năng suất
      </h3>
      <div className="h-64 relative">
        <Chart ref={chartRef} type="bar" data={data} options={options} />
      </div>
      <div className="flex justify-center mt-3 space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-1" />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Thời gian học (giờ)
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-1" />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Năng suất (%)
          </span>
        </div>
      </div>
    </div>
  );
}
