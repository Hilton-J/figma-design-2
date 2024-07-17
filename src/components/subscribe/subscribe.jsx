import './subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe-section' id='subscribe'>
            <div className='subscribe-display'>
                <h2>SUBSCRIBE</h2>
                <p>Sign-up to our newletter</p>
                <form className='subscribe-form'>
                    <input type='email' placeholder='Your email' required />
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>

        </div>
    )
}

export default Subscribe