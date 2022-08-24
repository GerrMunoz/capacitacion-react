import Box from '../Box/Box';

function Card(props) {
    return (
        <Box backgroundColor="navajowhite" borderRadius="10px" padding="16px" {...props}>
            {props.children}
        </Box>
    );
}

export default Card;
