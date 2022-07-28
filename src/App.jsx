import Box from './components/Box/Box';
import Title from './components/Title/Title';
import Image from './components/Image/Image';
import List from './components/List/List';
import ListItem from './components/ListItem/ListItem';
import './styles.css';

function App() {
    return (
        <Box padding="16px">
            <Title>Receta brownies</Title>

            <Image url="https://upload.wikimedia.org/wikipedia/commons/6/68/Chocolatebrownie.JPG" alt="brownie" />

            <Box backgroundColor="navajowhite" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Ingredientes</Title>

                <List>
                    <ListItem>75gr de manteca</ListItem>
                    <ListItem>150gr de chocolate</ListItem>
                    <ListItem>2 huevos</ListItem>
                    <ListItem>1 taza de azúcar</ListItem>
                    <ListItem>100gr de harina leudante</ListItem>
                    <ListItem isImportant={true}>Ingrediente secreto de Gera</ListItem>
                    <ListItem isOptional={true}>Chips de chocolate (opcional)</ListItem>
                    <ListItem isOptional={true}>Esencia de vainilla (opcional)</ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default App;
