import './styles.css';

function App() {
    return (
        <div>
            <h1
                style={{
                    letterSpacing: '-0.2px',
                    color: 'maroon',
                    fontFamily: 'sans-serif'
                }}
            >
                Receta brownies
            </h1>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/68/Chocolatebrownie.JPG"
                    alt="brownie-imagen"
                    style={{ width: '200px', borderRadius: '25%', border: '2px solid chocolate' }}
                />
            </div>
            {/* No agregar style a este div */}
            <div style={{ backgroundColor: 'navajoWhite', borderRadius: '10px', padding: '20px' }}>
                <h3 style={{ fontFamily: 'sans-serif', color: 'maroon', margin: '0px' }}>Ingredientes:</h3>
                <ul>
                    <li
                        style={{
                            fontFamily: 'sans-serif',
                            letterSpacing: '-0.2px',
                            fontSize: '18px',
                            margin: '2px 0',
                            listStyleType: 'square'
                        }}
                    >
                        75gr de manteca
                    </li>
                    <li
                        style={{
                            fontFamily: 'sans-serif',
                            letterSpacing: '-0.2px',
                            fontSize: '18px',
                            margin: '2px 0',
                            listStyleType: 'square'
                        }}
                    >
                        150gr de chocolate
                    </li>
                    <li
                        style={{
                            fontFamily: 'sans-serif',
                            letterSpacing: '-0.2px',
                            fontSize: '18px',
                            margin: '2px 0',
                            listStyleType: 'square'
                        }}
                    >
                        2 huevos
                    </li>
                    <li
                        style={{
                            fontFamily: 'sans-serif',
                            letterSpacing: '-0.2px',
                            fontSize: '18px',
                            margin: '2px 0',
                            listStyleType: 'square'
                        }}
                    >
                        1 taza de azúcar
                    </li>
                    <li
                        style={{
                            fontFamily: 'sans-serif',
                            letterSpacing: '-0.2px',
                            fontSize: '18px',
                            margin: '2px 0',
                            listStyleType: 'square'
                        }}
                    >
                        100gr de harina leudante
                    </li>

                    <li
                        style={{
                            fontFamily: 'sans-serif',
                            letterSpacing: '-0.2px',
                            fontSize: '18px',
                            margin: '2px 0',
                            listStyleType: 'square'
                        }}
                    >
                        Chips de chocolate (opcional)
                    </li>
                    <li
                        style={{
                            fontFamily: 'sans-serif',
                            letterSpacing: '-0.2px',
                            fontSize: '18px',
                            margin: '2px 0',
                            listStyleType: 'square'
                        }}
                    >
                        Esencia de vainilla (opcional)
                    </li>
                    <li
                        style={{
                            fontFamily: 'sans-serif',
                            letterSpacing: '-0.2px',
                            fontSize: '18px',
                            margin: '2px 0',
                            listStyleType: 'square',
                            fontWeight: 'bold',
                            color: 'chocolate'
                        }}
                    >
                        Ingrediente secreto de Gera
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
