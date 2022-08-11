import Box from './components/Box/Box';
import Title from './components/Title/Title';
import Image from './components/Image/Image';
import List from './components/List/List';
import ListItem from './components/ListItem/ListItem';
import { useState } from 'react';
import './styles.css';

const listaIngredientes = [
    { name: '75gr de manteca' },
    { name: '150gr de chocolate' },
    { name: '2 huevos' },
    { name: '150gr de chocolate' },
    { name: '100gr de harina leudante' },
    { name: 'Ingrediente secreto de Gera', isImportant: true },
    { name: 'Chips de chocolate (opcional)', isOptional: true },
    { name: 'Esencia de vainilla (opcional)', isOptional: true }
];

function App() {
    const [showList, setShowList] = useState(true);

    return (
        <Box padding="16px">
            <Title>Receta brownies</Title>

            <Image url="https://upload.wikimedia.org/wikipedia/commons/6/68/Chocolatebrownie.JPG" alt="brownie" />

            <Box backgroundColor="navajowhite" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Ingredientes</Title>

                <button
                    onClick={function () {
                        if (showList === true) {
                            setShowList(false);
                        } else {
                            setShowList(true);
                        }
                    }}
                >
                    Mostrar ingrendientes
                </button>

                {showList && (
                    <List>
                        {listaIngredientes.map((ingrediente) => (
                            <ListItem isImportant={ingrediente.isImportant} isOptional={ingrediente.isOptional}>
                                {ingrediente.name}
                            </ListItem>
                        ))}
                    </List>
                )}
            </Box>
        </Box>
    );
}

export default App;
