import images from '../../images/clear.png';

export default function ImageContainer({ weather }: IImageContainerProps) {
    if (!weather) {
        return null;
    }

    const getImageForWeather = (weather: string) => {
        const lowercaseWeather = weather.toLowerCase();
        switch (lowercaseWeather) {
            case 'clouds':
                return 'clouds.png';
            case 'sunny':
                return 'clear.png';
            case 'snow':
                return 'snow.png';
            default:
                console.warn(`Unsupported weather: ${lowercaseWeather}`);
                return 'clear.png';
        }
    };

    const imageUrl = `/${getImageForWeather(weather)}`;

    console.log(imageUrl);

    return (
        <img src={imageUrl} alt={weather} />
    );
}
