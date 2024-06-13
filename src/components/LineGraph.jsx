import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

const LineGraph = () => {
  const [data, setData] = useState({
    inPatient: [],
    outPatient: []
  });

  useEffect(() => {
    // Fetch data from your API or other sources here
    // Mock data for demonstration
    const generateMockData = () => {
      const inPatient = [];
      const outPatient = [];
      const today = new Date();
      
      for (let i = 0; i < 15; i++) { // 5 months worth of data
        const date = new Date();
        date.setDate(today.getDate() - i);
        inPatient.unshift({ x: date, y: Math.floor(Math.random() * 100) + 1 });
        outPatient.unshift({ x: date, y: Math.floor(Math.random() * 200) + 1 });
      }

      setData({ inPatient, outPatient });
    };

    generateMockData();
  }, []);

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        },
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        beginAtZero: true,
        max: 200,
        height: 1000,
        ticks: {
          stepSize: 20
        },
        title: {
          display: true,
          text: 'Value'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        mode: 'index',
        intersect: false
      },
      title: {
        display: true,
        text: 'In-Patient and Out-Patient Data'
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: true
    }
  };

  const chartData = {
    datasets: [
      {
        label: 'In-Patient',
        data: data.inPatient,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        fill: false,
        tension: 0,

      },
      {
        label: 'Out-Patient',
        data: data.outPatient,
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        fill: false,
        tension: 0,
      }
    ]
  };

  return (
    <div className="p-4 w-1/2 h-[1900px]">
      <Line className='bg-lightpowder border border-bcolor' options={options} data={chartData} />
    </div>
  );
};

export default LineGraph;
