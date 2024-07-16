import './header.css'

const Header = () => {
    return (
        <section className='header-section container'>
            <nav>
                <div className='header-logo'>D<span>Z</span></div>

                <div className='header-link'>
                    <a href='#about'>ABOUT</a>
                    <a href='#articles'>ARTICLES</a>
                </div>

                <div className='header-subscribe'>
                    <button className='subscribe-btn'>SUBSCRIBE</button>
                </div>
            </nav>
            <section className='header-text'>
                <h1>DRONOTICZ</h1>
                <h2>THE ERA OF DRONES</h2>
            </section>
        </section>
    )
}

export default Header