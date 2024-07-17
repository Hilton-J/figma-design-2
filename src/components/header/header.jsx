import './header.css'

const Header = () => {
    return (
        <section className='header-section container'>
            <section className='nav-section'>
                <nav>
                    <div className='header-logo'><span >D</span><span className='primary-color'>Z</span></div>
                    <div className='header-link'>
                        <div className='link'>
                            <a href='#about'>ABOUT</a>
                            <a href='#articles'>ARTICLES</a>
                        </div>
                    </div>
                    <div className='header-subscribe'>
                        <div>
                            <a href='#subscribe'>
                                <button className='subscribe-btn'>SUBSCRIBE</button>
                            </a>
                        </div>
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