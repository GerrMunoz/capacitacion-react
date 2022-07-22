import './image.css';

function Image(props) {
    const url = props.url;
    const alt = props.alt;

    return <img src={url} alt={alt} />;
}

export default Image;
