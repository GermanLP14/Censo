import MenuBar from './MenuBar';
import { useEffect, useState } from 'react';

const FinCenso = () => {

    const targetDate = new Date('2023-08-31T00:00:00');
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

    function getTimeRemaining() {
    const now = new Date();
    const timeRemaining = targetDate - now;
    return timeRemaining > 0 ? timeRemaining : 0;
    }
    

    useEffect(() => {
    const countdownInterval = setInterval(() => {
        const timeRemaining = getTimeRemaining();
        setTimeRemaining(timeRemaining);
    }, 1000);

    return () => clearInterval(countdownInterval);
    }, []);

    const tiempoRestante = () => {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return `Faltan ${days} días, ${hours} hora/s, ${minutes} minutos, ${seconds} segundos, para que termine el censo`;
    }

    return (
    <>
    <MenuBar />
    <div>
        <div className="row justify-content-center">
        <div className="col-md-6 text-center">
        <h1>{tiempoRestante()}</h1>
        </div>
        </div>
    </div>
    </>
    );
};

export default FinCenso;