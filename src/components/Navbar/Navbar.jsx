import { NavLink } from 'react-router-dom';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import './navbar.css';

function Navbar() {
    function getClassName({ isActive }) {
        if (isActive) {
            return 'navbar-item navbar-item-active';
        }

        return 'navbar-item';
    }

    return (
        <nav className="navbar">
            <List isHorizontal backgroundColor="maroon" padding="8px 16px">
                <ListItem>
                    <NavLink to="receta" className={getClassName}>
                        Receta
                    </NavLink>
                </ListItem>

                <ListItem>
                    <NavLink to="cocteles" className={getClassName}>
                        Cocteles
                    </NavLink>
                </ListItem>
            </List>
        </nav>
    );
}

export default Navbar;
