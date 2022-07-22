import Title from './components/Title/Title';
import Image from './components/Image/Image';
import './styles.css';
import List from './components/List/List';
import ListItem from './components/ListItem/ListItem';

function App() {
    return (
        <div>
            <Title isBig={true}>Receta brownies</Title>

            <div>
                <Image
                    url="https://upload.wikimedia.org/wikipedia/commons/6/68/Chocolatebrownie.JPG"
                    alt="brownie-imagen"
                />
            </div>

            <div className="ingredientes">
                <Title>Ingredientes</Title>

                <List>
                    <ListItem className="ingrediente-secreto">Ingrediente secreto de Gera</ListItem>
                    <ListItem>75gr de manteca</ListItem>
                    <ListItem>150gr de chocolate</ListItem>
                    <ListItem>2 huevos</ListItem>
                    <ListItem>1 taza de azúcar</ListItem>
                    <ListItem>100gr de harina leudante</ListItem>
                    <ListItem className="ingrediente-opcional">Chips de chocolate (opcional)</ListItem>
                    <ListItem className="ingrediente-opcional">Esencia de vainilla (opcional)</ListItem>
                </List>
            </div>
        </div>
    );
}

export default App;
