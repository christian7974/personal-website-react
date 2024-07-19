import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

import skills from '../assets/skills_array';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillRadarChart = () => {
    const skillLabels = skills.map(skill => skill.name);
    const skillValues = skills.map(skill => skill.value);
  const data = {
    labels: skillLabels,
    datasets: [
      {
        label: 'Proficiency Level',
        data: skillValues, // 1=Novice, 2=Advanced, 3=Expert
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
    ]
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false
        },
        min: -1,
        max: 3,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            if (value === 1) return 'Novice';
            if (value === 2) return 'Advanced';
            if (value === 3) return 'Expert';
          },
          font: {
            size: 20 // size of the novice/advanced labels
        },
        },
        pointLabels: {
            font: {
                size: 20 // size of the languages/skills
            }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff' // Add this line to set the background color to white
        }
      }
    },
    plugins: {
      legend: {
        display: false // Hide the legend
      }
    },
    maintainAspectRatio: false // Add this option to allow custom size
  };

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', padding: '20px' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillRadarChart;
