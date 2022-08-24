import { useEffect, useState } from 'react';
import Box from '../../components/Box/Box';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

function Cocteles() {
    const [cocktails, setCocktails] = useState([]);
    const [showAllCocktails, setShowAllCocktails] = useState(false);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
            .then((response) => response.json())
            .then((data) => setCocktails(data.drinks));
    }, []);

    return (
        <Box display="flex" flexDirection="column" rowGap="16px" padding="16px">
            <Box>
                <Title>Coctel favorito de Mati</Title>

                {cocktails.length > 0 && (
                    <Card>
                        <Title isSmall>{cocktails[0].strDrink}</Title>
                        <p>Categoría: {cocktails[0].strCategory}</p>
                        <Image url={cocktails[0].strDrinkThumb} />
                    </Card>
                )}
            </Box>

            {/* Tarea: mostrar todos los cocteles */}
            <Box display="flex" flexDirection="column" rowGap="8px">
                <Title>Cocteles</Title>
                <Title isSmall>Había tarea pendiente...</Title>

                <Box display="flex" gap="16px" flexWrap="wrap">
                    {showAllCocktails ? (
                        cocktails.length > 0 &&
                        cocktails.map((item) => (
                            <Card flexGrow="1">
                                <Title isSmall>{item.strDrink}</Title>
                                <Image url={item.strDrinkThumb} />
                                <p>Categoría: {item.strCategory}</p>
                            </Card>
                        ))
                    ) : (
                        <Button onClick={() => setShowAllCocktails(!showAllCocktails)}>
                            Mostrar todos los cocteles
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default Cocteles;
