import Link from 'next/link'

const Header = () => {

    //  JSX = HTML in javascript
    return (
        <header className='header'>
            <img className="header__logo" src="https://carbonology.in/images/Carbonology_Logo_WithType_Dark_600px.png" />
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <Link href="/">
                            <a className="nav__link">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link href="/contact">
                            <a className="nav__link">
                                Contact
                            </a>
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link href="/about">
                            <a className="nav__link">
                                About
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
                <style jsx>{`

                    .header {
                        background-color: #303030;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 50px;
                    }

                    .header__logo {
                        filter: invert(1);
                        max-width: 175px;
                    }

                    .nav__list {
                        display: flex;
                    }

                    .nav__list-item {
                        list-style-type: none;
                    }

                    .nav__link {
                        color: #fafafa;
                        padding: 0 25px;
                    }
                    
                `}</style>
        </header>
    )
}

export default Header
