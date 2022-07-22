import './list-item.css';

function ListItem(props) {
    const children = props.children;

    if (props.isImportant === true) {
        return <li className="list-item list-item-important">{children}</li>;
    }

    if (props.isOptional === true) {
        return <li className="list-item list-item-optional">{children}</li>;
    }

    return <li className="list-item">{children}</li>;
}

export default ListItem;
