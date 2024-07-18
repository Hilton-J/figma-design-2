import './articles.css'
import Cards from '../cards/cards'


const Articles = () => {
    return (
        <section id='articles' className='articles-section'>
            <div className='wrap'>
                <div className='header-articles'>
                    <h2>LATEST ARTICLES</h2>
                </div>
                <Cards />
            </div>
        </section>
    )
}

export default Articles