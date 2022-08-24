import { useEffect, useState } from 'react';
import Box from './components/Box/Box';
import Title from './components/Title/Title';
import Image from './components/Image/Image';
import List from './components/List/List';
import ListItem from './components/ListItem/ListItem';
import './styles.css';
import Button from './components/Button/Button';

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
    const [counter, setCounter] = useState(0);
    const [showList, setShowList] = useState(false);
    const [like, setLike] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        setHistory((prevHistory) => [...prevHistory, 'Componente App montado']);

        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
            .then((response) => response.json())
            .then((data) => setCocktails(data.drinks));

        return function () {
            setHistory((prevHistory) => [...prevHistory, 'Componente App desmontado']);
        };
    }, []);

    function handleClickShowList() {
        setShowList(!showList);
    }

    function handleClickLike() {
        setLike(!like);
        setHistory((prevHistory) => [...prevHistory, 'Cambió el valor del like']);
    }

    function handleClickSave() {
        setIsSaved(!isSaved);
        setHistory((prevHistory) => [...prevHistory, 'Cambió el valor del save']);
    }

    function handleClickShowHistory() {
        setShowHistory(!showHistory);
    }

    function handleClickResetHistory() {
        setHistory([]);
    }

    return (
        <Box padding="16px">
            <Title>Receta brownies</Title>

            <Image url="https://upload.wikimedia.org/wikipedia/commons/6/68/Chocolatebrownie.JPG" alt="brownie" />

            <Box backgroundColor="navajowhite" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Ingredientes</Title>

                <Box>
                    <Button onClick={handleClickShowList}>
                        {showList ? 'Ocultar ingredientes' : 'Mostrar ingredientes'}
                    </Button>
                </Box>

                {showList && (
                    <List>
                        {listaIngredientes.map((item, i) => (
                            <ListItem
                                key={'list-item-' + i}
                                isImportant={item.isImportant}
                                isOptional={item.isOptional}
                            >
                                {item.name}
                            </ListItem>
                        ))}
                    </List>
                )}
            </Box>

            <Box backgroundColor="navajowhite" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Puntuación: {counter}</Title>

                <Button
                    onClick={function () {
                        setCounter(counter - 1);
                    }}
                >
                    Bajar puntuación
                </Button>
                <Button onClick={() => setCounter(counter + 1)}>Subir puntuación</Button>
                <Button onClick={() => setCounter(0)}>Reiniciar puntuación</Button>

                {counter >= 10 && <p>Esta receta la rompe</p>}
            </Box>

            <Box backgroundColor="navajowhite" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Interacciones</Title>

                <Button onClick={handleClickLike}>{like ? '❤️ Me gusta' : '💔 Ya no me gusta'}️</Button>
                <Button onClick={handleClickSave}>{isSaved ? 'Guardar receta' : '⭐ Receta guardada!'}️</Button>
            </Box>

            <Box backgroundColor="navajowhite" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Historial</Title>

                {showHistory && history.map((message, i) => <p key={'message-' + i}>{message}</p>)}

                {
                    <Button onClick={handleClickShowHistory}>
                        {showHistory ? 'Ocultar historial' : 'Mostrar historial'}
                    </Button>
                }

                {history?.length > 0 && <Button onClick={handleClickResetHistory}>Re️iniciar historial</Button>}
            </Box>

            {/* Ejemplo de a uno solo */}
            <Box marginTop="16px">
                <Title>Coctel favorito de Mati</Title>

                {cocktails.length > 0 && (
                    <Box
                        key={cocktails[0].id}
                        backgroundColor="navajowhite"
                        borderRadius="10px"
                        padding="16px"
                        marginTop="8px"
                    >
                        <Title isSmall>{cocktails[0].strDrink}</Title>
                        <Image url={cocktails[0].strDrinkThumb} />
                        <p>Categoría: {cocktails[0].strCategory}</p>
                    </Box>
                )}
            </Box>

            {/* Así tiene que ser la tarea, aplicando map */}
            <Box marginTop="16px">
                <Title>Cocteles</Title>

                {cocktails.length > 0 &&
                    cocktails.map((item) => (
                        <Box
                            key={item.idDrink}
                            backgroundColor="navajowhite"
                            borderRadius="10px"
                            padding="16px"
                            marginTop="8px"
                        >
                            <Title isSmall>{item.strDrink}</Title>
                            <Image url={item.strDrinkThumb} />
                            <p>Categoría: {item.strCategory}</p>
                        </Box>
                    ))}
            </Box>
        </Box>
    );
}

export default App;
