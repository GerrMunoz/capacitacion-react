import './title.css';

function Title(props) {
    let titleSize = 'title-small';

    if (props.isBig === true) {
        titleSize += 'title-big';
    }

    return <span className={'title ' + titleSize}>{props.children}</span>;
}

export default Title;
