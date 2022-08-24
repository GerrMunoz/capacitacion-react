import './list.css';

function List(props) {
    const padding = props.padding;

    let listClass = 'list';

    if (props.isHorizontal === true) {
        listClass = listClass + ' list-horizontal';
    }

    return (
        <ul className={listClass} style={{ padding }}>
            {props.children}
        </ul>
    );
}

export default List;
