import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import MaxWidthContainer from '../shared/MaxWidthContainer';

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const skillsData = {
    web: {
        labels: ['React', 'Node.js', 'MongoDB', 'HTML5', 'CSS', 'JavaScript'],
        data: [90, 75, 70, 95, 85, 80],
        backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
        ],
    },
    mobile: {
        labels: ['Flutter', 'Dart', 'Firebase'],
        data: [85, 80, 75],
        backgroundColor: [
            'rgba(0, 200, 83, 0.6)',
            'rgba(255, 87, 34, 0.6)',
            'rgba(63, 81, 181, 0.6)',
        ],
    },
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState('web');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const currentSkills = skillsData[activeTab];

    return (
        <div className='py-20 text-neutral-400'>
            <MaxWidthContainer>
                <h1 className='text-4xl mb-8'>Technical Skills</h1>
                <div className='flex space-x-4 sm:justify-start justify-center items-center w-full mb-6'>
                    <button
                        onClick={() => handleTabChange('web')}
                        className={`py-2 px-4 rounded ${activeTab === 'web' ? 'bg-indigo-600 text-white' : 'bg-gray-600 text-gray-300'}`}
                    >
                        Web Application
                    </button>
                    <button
                        onClick={() => handleTabChange('mobile')}
                        className={`py-2 px-4 rounded ${activeTab === 'mobile' ? 'bg-indigo-600 text-white' : 'bg-gray-600 text-gray-300'}`}
                    >
                        Mobile Application
                    </button>
                </div>
                <div className='flex justify-center'>
                    <div className="w-64">
                        <Doughnut
                            data={{
                                labels: currentSkills.labels,
                                datasets: [{
                                    data: currentSkills.data,
                                    backgroundColor: currentSkills.backgroundColor,
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 1,
                                }],
                            }}
                        />
                    </div>
                </div>

                <div className='flex flex-wrap md:gap-x-0 gap-x-5 justify-center md:justify-around mt-8'>
                    {currentSkills.labels.map((label, index) => (
                        <div key={label} className='flex flex-col items-center   p-2'>
                            <div className='text-2xl font-semibold'>{label}</div>
                            <div className='text-lg text-gray-300'>{currentSkills.data[index]}%</div>
                        </div>
                    ))}
                </div>
            </MaxWidthContainer>
        </div>
    );
};

export default Skills;
