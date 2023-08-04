"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
  };

export function BarChart({
    labels,
    data
}:{
    labels: number[],
    data: number[]
}) {
    const dataObj = {
        labels,
        datasets: [
          {
            label: '',
            data: data,
            barThickness: 12,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: '#8f7efb',
          },
        ],
      }
  return <Bar options={options} data={dataObj} />;
}
