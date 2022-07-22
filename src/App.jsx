import './styles.css';

function App() {
    return (
        <div>
            <h1>Receta brownies</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Chocolatebrownie.JPG" alt="brownie-imagen" />
            <div>
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
            </div>
        </div>
    );
}

export default App;
