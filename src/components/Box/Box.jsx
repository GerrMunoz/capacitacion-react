function Box(props) {
    return (
        <div
            style={{
                height: props.height,
                width: props.height,
                backgroundColor: props.backgroundColor,
                border: props.border,
                borderRadius: props.borderRadius,
                paddingTop: props.paddingTop,
                paddingRight: props.paddingRight,
                paddingBottom: props.paddingBottom,
                paddingLeft: props.paddingLeft,
                padding: props.padding,
                margin: props.margin,
                marginTop: props.marginTop,
                marginRight: props.marginRight,
                marginBottom: props.marginBottom,
                marginLeft: props.marginLeft
            }}
        >
            {props.children}
        </div>
    );
}

export default Box;
