'use client';

import { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Chart,
  TooltipModel,
  TooltipItem
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function DailyPatternChart() {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const data = {
    labels: ['6-8h', '8-10h', '10-12h', '12-14h', '14-16h', '16-18h', '18-20h', '20-22h', '22-24h'],
    datasets: [
      {
        label: 'Thời gian học (phút)',
        data: [15, 75, 45, 20, 30, 50, 60, 45, 20],
        backgroundColor: 'rgba(59, 130, 246, 0.1)', // Blue
        borderColor: 'rgba(59, 130, 246, 1)', // Blue
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Năng suất (%)',
        data: [65, 85, 75, 60, 70, 80, 75, 78, 65],
        backgroundColor: 'rgba(16, 185, 129, 0.1)', // Green
        borderColor: 'rgba(16, 185, 129, 1)', // Green
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        hidden: true, // By default hide the second dataset (Năng suất)
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disable default tooltip
        external: function (context: {
          chart: Chart<'line'>;
          tooltip: TooltipModel<'line'>;
        }) {
          const tooltip = tooltipRef.current;
          if (context.tooltip.opacity === 0) {
            if (tooltip) tooltip.style.opacity = '0';
            return;
          }

          const data = context.tooltip.dataPoints;
          let html = `<div class="mb-1"><span class="font-bold">${context.tooltip.title[0]}</span></div>`;

          data.forEach((point: TooltipItem<'line'>) => {
            if (point.datasetIndex === 0) {
              html += `
                <div class="flex items-center mb-1">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Thời gian: <span class="font-bold ml-1">${point.raw} phút</span>
                </div>
              `;
            } else {
              html += `
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Năng suất: <span class="font-bold ml-1">${point.raw}%</span>
                </div>
              `;
            }
          });

          if (tooltip) {
            tooltip.innerHTML = html;
            tooltip.style.opacity = '1';
            tooltip.style.left = `${context.tooltip.caretX + context.chart.canvas.offsetLeft}px`;
            tooltip.style.top = `${context.tooltip.caretY + context.chart.canvas.offsetTop}px`;
          }
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Phút học / Năng suất (%)',
          color: '#6b7280',
        },
        grid: {
          color: 'rgba(229, 231, 235, 0.5)',
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
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-gray-500 mb-4">
        Thói quen học tập hàng ngày
      </h3>
      <div className="h-64 relative">
        <Line data={data} options={options} />
        {/* Tooltip Display */}
        <div
          ref={tooltipRef}
          className="absolute p-2 bg-white shadow-md rounded-lg opacity-0 transition-opacity duration-200"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
      </div>
        {/* Tooltip Content */}
      <div className="mt-3 p-3 bg-green-50 rounded-lg">
        <p className="text-xs text-green-700">
          Bạn học hiệu quả nhất vào buổi sáng (8-10h).
        </p>
      </div>
    </div>
  );
}
