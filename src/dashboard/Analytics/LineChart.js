import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register the required scales with Chart.js
Chart.register(...registerables);

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext('2d');
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new Chart(myChartRef, {
        type: 'doughnut',
        data: {
         
          datasets: [
            {
              label: '# of Votes',
              data: [5, 7, 6, 5, 4],
              backgroundColor: [
                '#c71ff4',
                '#39f41f',
                '#f8cf2f',
                '#1ff4ad',
                '#1f9af4',
                
                
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              
              ],
              borderWidth: 1,
            },
          ],
        },
      });
    }
  }, []);

  return (
    <div style={{ height: '180px', width: '180px' }}>
      <canvas ref={chartRef} height={360} width={308} style={{ display: 'block', height: '180px', width: '154px' }}></canvas>
    </div>
  );
};

export default LineChart;