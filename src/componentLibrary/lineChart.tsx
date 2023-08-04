"use client"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const optionsObj = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
        },
    },
}

export function LineChart({
    data,
    labels
}: {
    data: number[],
    labels: number[]
}) {

    let dataObj = {
        labels,
        datasets: [
            {
                label: "none",
                data: data,
                borderColor: '#8f7efb',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return <Line options={optionsObj} data={dataObj} />;
}
