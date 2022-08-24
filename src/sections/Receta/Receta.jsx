import { useEffect, useState } from 'react';
import Box from '../../components/Box/Box';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';
import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

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

function Receta() {
    const [counter, setCounter] = useState(0);
    const [showList, setShowList] = useState(false);
    const [like, setLike] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        setHistory((prevHistory) => [...prevHistory, 'Componente App montado']);

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

            <Card>
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
            </Card>

            <Card backgroundColor="navajowhite" borderRadius="10px" padding="16px" marginTop="8px">
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
            </Card>

            <Card backgroundColor="navajowhite" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Interacciones</Title>

                <Button onClick={handleClickLike}>{like ? '❤️ Me gusta' : '💔 Ya no me gusta'}️</Button>
                <Button onClick={handleClickSave}>{isSaved ? 'Guardar receta' : '⭐ Receta guardada!'}️</Button>
            </Card>

            <Card backgroundColor="navajowhite" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Historial</Title>

                {showHistory && history.map((message, i) => <p key={'message-' + i}>{message}</p>)}

                {
                    <Button onClick={handleClickShowHistory}>
                        {showHistory ? 'Ocultar historial' : 'Mostrar historial'}
                    </Button>
                }

                {history?.length > 0 && <Button onClick={handleClickResetHistory}>Re️iniciar historial</Button>}
            </Card>
        </Box>
    );
}

export default Receta;
