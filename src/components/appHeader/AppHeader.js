import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header>
            <div className="container">
                <div className="header__content">
                    <h1 className="title">
                        <Link to="/">
                            <span>Marvel</span> information portal
                        </Link>
                    </h1>
                    <ul className="menu">
                        <li className="menu__item">
                            <NavLink exact activeStyle={{"color" : "#9f0013"}} to="/">Characters</NavLink>
                        </li>
                        <li className="sub-menu__item">
                            <span>/</span>
                            <NavLink exact activeStyle={{"color" : "#9f0013"}} to="/comics">Comics</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;