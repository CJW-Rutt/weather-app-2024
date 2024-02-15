import styles from './ImageContainer.module.css';

import images from '../../images/clear.png'

export default function ImageContainer({ weather }) {

    const getImageForWeather = (weather) => {
        switch (weather.toLowerCase()) {
            case 'clouds':
                return 'clouds.png';
            case 'sunny':
                return 'clear.png';
            case 'snow':
                return 'snow.png';
            default:
                return 'clear.png'; 
        }
    };

    const imageUrl = `/${getImageForWeather(weather)}`;

    console.log(imageUrl);

    return (
        <img src={imageUrl} alt={weather} />
    );
};
