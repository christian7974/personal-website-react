import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

import skills from '../assets/skills_array';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillRadarChart = () => {

    const beginnerName = "Novice";
    const intermediateName = "Intermediate";
    const advancedName = "Advanced";

    const skillLabels = skills.map(skill => skill.name);
    const skillValues = skills.map(skill => skill.value);
    const data = {
        labels: skillLabels,
        datasets: [
        {
            label: 'Proficiency Level',
            data: skillValues, // 1=Novice, 2=Advanced, 3=Expert
            backgroundColor: '#35979740', // color of the area
            borderColor: '#359797', // border of the area
            borderWidth: 1,
            pointRadius: 8,
            pointHoverRadius: 15,
        },
        ]
    };

    const options = {
    // events: [], // Disable hover effect
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
            if (value === 1) return beginnerName;
            if (value === 2) return intermediateName;
            if (value === 3) return advancedName;
            },
            color: '#E2E2E2', // color of the novice/advanced
            backdropColor: "rgba(10, 10, 10, 1)",
            font: {
            size: 24, // size of the novice/advanced labels
        },
        },
        pointLabels: { // skills
            color: '#E2E2E2', // color of the skills
            font: {
                size: 28, // size of the languages/skills
            },
        },
        grid: {
            color: '#707070', // color of the circular lines
            lineWidth: 2, // Width of the grid lines
            borderColor: 'rgba(0, 0, 0, 0.2)', // Color of the outer border
            borderWidth: 1 // Width of the outer border
        },
        }
    },
    plugins: {
        legend: {
        display: false // Hide the legend
        },
        tooltip: {
        titleFont: {
            size: 20
        },
        bodyFont: {
            size: 16
        },
        // Convert numerical values to 
        callbacks: {
            label: function(context) {
                const value = context.raw;
                if (value === 1) return beginnerName;
                if (value === 2) return intermediateName;
                if (value === 3) return advancedName;
            }
        },
        
        }
    },
    maintainAspectRatio: false // Add this option to allow custom size
    };

    return (
    <div style={{ width: '70%', height: '70%', margin: '0 auto' }}>
        <Radar data={data} options={options} />
    </div>
    );
};

export default SkillRadarChart;
