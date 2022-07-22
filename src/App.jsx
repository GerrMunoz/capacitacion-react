import Title from './components/Title/Title';
import Image from './components/Image/Image';
import './styles.css';
import List from './components/List/List';
import ListItem from './components/ListItem/ListItem';

function App() {
    return (
        <div>
            <Title>Receta brownies</Title>
            <h1>Receta brownies</h1>
            <Image url="https://upload.wikimedia.org/wikipedia/commons/6/68/Chocolatebrownie.JPG" alt="brownie" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Chocolatebrownie.JPG" alt="brownie-imagen" />
            <div>
                <Title isSmall={true}>Ingredientes</Title>
                <h3>Ingredientes</h3>
                <ul>
                    <li>100gr de manteca</li>
                    <li>150gr de chocolate</li>
                    <li>2 huevos</li>
                    <li>1 taza de azúcar</li>
                    <li>100gr de harina</li>
                    <li className="ingrediente-opcional">Chips de chocolate (opcional)</li>
                    <li className="ingrediente-opcional">Esencia de vainilla (opcional)</li>
                    <li className="ingrediente-secreto">Ingrediente secreto de Gera</li>
                </ul>
                <List>
                    <ListItem>75gr de manteca</ListItem>
                    <ListItem>150gr de chocolate</ListItem>
                    <ListItem>2 huevos</ListItem>
                    <ListItem>1 taza de azúcar</ListItem>
                    <ListItem>100gr de harina leudante</ListItem>
                    <ListItem isOptional={true}>Chips de chocolate (opcional)</ListItem>
                    <ListItem isOptional={true}>Esencia de vainilla (opcional)</ListItem>
                    <ListItem isImportant={true}>Ingrediente secreto de Gera</ListItem>
                </List>
            </div>
        </div>
    );
}

export default App;
