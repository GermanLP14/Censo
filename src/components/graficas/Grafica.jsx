import React from 'react';
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



function Grafica({ etiquetas, valores, nombreGrafica, nombreDatos }) {

    

    const options = {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: nombreGrafica,
            },
        },
        width: 600,
        height: 400
    };

    const labels = etiquetas;
    //x

    const data = {
        labels,
        datasets: [
            {
                label: nombreDatos,
                data: valores,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };


    return (
        <>
            
            <Bar height="400px" width="400px" options={options} data={data} />
            
        </>
    );
}


export default Grafica

