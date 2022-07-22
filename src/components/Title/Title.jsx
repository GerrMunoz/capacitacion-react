import './title.css';

function Title(props) {
    if (props.isSmall === true) {
        return <h3 className="title">{props.children}</h3>;
    }

    return <h1 className="title">{props.children}</h1>;
}

export default Title;
