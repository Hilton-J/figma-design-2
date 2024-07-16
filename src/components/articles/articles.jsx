import './articles.css'
import Drone1 from '../../assets/drone1.jpeg'
import Drone2 from '../../assets/drone2.jpeg'
import Drone6 from '../../assets/drone6.jpeg'
import Drone4 from '../../assets/drone4.jpeg'


const Articles = () => {
    return (
        <section id='articles' className='articles-section container'>
            <div className='articles-wrap'>
                <div className='header-articles'>
                    <h2>LATEST ARTICLES</h2>
                </div>
                <div className='card-articles'>

                    <div className='cards'>
                        <div className='card-image'>
                            <img src={Drone1} alt='Drone1' />
                        </div>
                        <div className='card-text'>
                            <div className='bar'></div>
                            <p>How to automate surveillance drones</p>
                        </div>
                    </div>

                    <div className='cards'>
                        <div className='card-image'><img src={Drone2} alt='Drone2' /></div>
                        <div className='card-text'>
                            <div className='bar'></div>
                            <p>Robotics and artificial Intelligence</p>
                        </div>
                    </div>
                    <div className='cards'>
                        <div className='card-image'><img src={Drone6} alt='Drone6' /></div>
                        <div className='card-text'>
                            <div className='bar'></div>
                            <p>Improving Lives through Robotics Prosthetics</p>
                        </div>
                    </div>
                    <div className='cards'>
                        <div className='card-image'><img src={Drone4} alt='Drone4' /></div>
                        <div className='card-text'>
                            <div className='bar'></div>
                            <p>Power of Robotics in Agriculture</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles