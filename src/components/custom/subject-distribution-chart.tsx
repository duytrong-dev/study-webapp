'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Chart,
  TooltipModel
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SubjectDistributionChart() {
  const [tooltipContent, setTooltipContent] = useState<string | null>(null);

  const data = {
    labels: ['Lập trình', 'Ngoại ngữ', 'Thiết kế', 'Khác'],
    datasets: [
      {
        data: [42, 28, 19, 11],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',   // Blue
          'rgba(16, 185, 129, 0.7)',   // Green
          'rgba(168, 85, 247, 0.7)',   // Purple
          'rgba(234, 179, 8, 0.7)',    // Yellow
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(168, 85, 247, 1)',
          'rgba(234, 179, 8, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disable default tooltip
        external: function (context: {
          chart: Chart<'doughnut'>;
          tooltip: TooltipModel<'doughnut'>;
        }) {
          const tooltip = document.getElementById('pieChartTooltip');
          if (context.tooltip.opacity === 0) {
            tooltip!.style.opacity = '0';
            return;
          }

          const data = context.tooltip.dataPoints[0];
          const hours = [12.5, 8.2, 5.7, 3.3][data.dataIndex];

          setTooltipContent(`
            <div class="mb-1"><span class="font-bold">${data.label}</span></div>
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full mr-2" style="background: ${data.dataset.backgroundColor}"></div>
              ${data.raw}% • ${hours} giờ
            </div>
          `);

          tooltip!.style.opacity = '1';
          tooltip!.style.left = `${context.tooltip.caretX + context.chart.canvas.offsetLeft}px`;
          tooltip!.style.top = `${context.tooltip.caretY + context.chart.canvas.offsetTop}px`;
        },
      },
    },
  };

  const subjectDetails = [
    { label: 'Lập trình', color: 'bg-blue-500', percent: 42, hours: 12.5 },
    { label: 'Ngoại ngữ', color: 'bg-green-500', percent: 28, hours: 8.2 },
    { label: 'Thiết kế', color: 'bg-purple-500', percent: 19, hours: 5.7 },
    { label: 'Khác', color: 'bg-yellow-500', percent: 11, hours: 3.3 },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
        Phân bổ môn học
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart */}
        <div className="relative h-64">
          <Doughnut data={data} options={options} />
          {/* Tooltip Display */}
          <div
            id="pieChartTooltip"
            className="absolute p-2 bg-white shadow-md rounded-lg opacity-0 transition-opacity duration-200"
            style={{
              position: 'absolute',
              pointerEvents: 'none',
              zIndex: 10,
            }}
            dangerouslySetInnerHTML={{ __html: tooltipContent || '' }}
          />
        </div>

        {/* Textual Summary */}
        <div>
          <div className="space-y-3">
            {subjectDetails.map((subject, idx) => (
              <div key={idx} className="flex items-center">
                <div className={`w-3 h-3 ${subject.color} rounded-full mr-2`} />
                <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                  {subject.label}
                </span>
                <span className="text-sm font-medium">
                  {subject.percent}% • {subject.hours}h
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
            <p className="text-xs text-blue-700 dark:text-blue-300">
              Bạn đã dành nhiều thời gian nhất cho Lập trình (42%). Tiếp tục phát huy nhé!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
