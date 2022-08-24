function Box(props) {
    return (
        <div
            style={{
                display: props.display,
                flexDirection: props.flexDirection,
                justifyContent: props.justifyContent,
                alignItems: props.alignItems,
                flexWrap: props.flexWrap,
                flexGrow: props.flexGrow,
                rowGap: props.rowGap,
                columnGap: props.columnGap,
                gap: props.gap,
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
