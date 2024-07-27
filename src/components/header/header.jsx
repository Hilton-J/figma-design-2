import './header.css'

const Header = () => {
    return (
        <section className='header-section'>
            <section className='nav-section'>
                <nav>
                    <div className='header-logo'>
                        <span >D</span><span className='primary-color'>Z</span>
                    </div>
                    <div className='header-link'>
                        <ul>
                            <li><a href='#about'>ABOUT</a></li>
                            <li><a href='#articles'>ARTICLES</a></li>
                        </ul>
                    </div>
                    <div className='header-subscribe'>
                        <button type='button' className='subscribe-btn'>SUBSCRIBE</button>
                    </div>
                </nav>
            </section>
            <section className='header-text'>
                <h1>DRONOTICZ</h1>
                <h2>THE ERA OF DRONES</h2>
            </section>
        </section>
    )
}

export default Header