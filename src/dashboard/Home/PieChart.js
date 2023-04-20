import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Biodegradable', 'Non-Biodegradable'],
    datasets: [
      {
        data: [19208, 19208],
        backgroundColor: ['#39F41F', ' #F8CF2F'],
      
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'left',
         // position the legend on the right side of the chart
      },
    },

  };
  return (
    <div style={{ height: '360px', width: '364px'}}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;